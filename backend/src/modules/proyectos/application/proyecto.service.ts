import { Injectable, Inject, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Proyecto } from '../domain/entities/proyecto.entity';
import { CreateProyectoDto, UpdateProyectoDto } from './dtos/proyecto.dto';
import { IProyectoRepository } from '../domain/repositories/proyecto.repository.interface';
import { PersonalProyectoRepositoryInterface } from '../../personal-proyecto/domain/repositories/personal-proyecto.repository.interface';
import { ClienteProyectoRepositoryInterface } from '../../cliente-proyecto/domain/repositories/cliente-proyecto.repository.interface';
import { PersonalProyecto } from '../../personal-proyecto/domain/entities/personal-proyecto.entity';
import { ClienteProyecto } from '../../cliente-proyecto/domain/entities/cliente-proyecto.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @Inject('IProyectoRepository')
    private proyectoRepository: IProyectoRepository,
    @Inject('PersonalProyectoRepositoryInterface')
    private personalProyectoRepository: PersonalProyectoRepositoryInterface,
    @Inject('ClienteProyectoRepositoryInterface')
    private clienteProyectoRepository: ClienteProyectoRepositoryInterface,
  ) {}

  async findAll(): Promise<Proyecto[]> {
    return this.proyectoRepository.find({
      relations: ['personalProyectos', 'clienteProyectos'],
    });
  }

  async findById(id: number): Promise<Proyecto> {
    const proyecto = await this.proyectoRepository.findOne({
      where: { id },
      relations: ['personalProyectos', 'clienteProyectos'],
    });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }
    return proyecto;
  }

  async create(createProyectoDto: CreateProyectoDto): Promise<Proyecto> {
    const proyecto = new Proyecto();
    Object.assign(proyecto, createProyectoDto);
    const savedProyecto = await this.proyectoRepository.save(proyecto);

    if (createProyectoDto.personalProyectos) {
      for (const pp of createProyectoDto.personalProyectos) {
        const personalProyecto = new PersonalProyecto();
        personalProyecto.proyecto = savedProyecto;
        personalProyecto.personal = { id: pp.personalId } as any;
        personalProyecto.rol = pp.rol;
        await this.personalProyectoRepository.save(personalProyecto);
      }
    }

    if (createProyectoDto.clienteProyectos) {
      for (const cp of createProyectoDto.clienteProyectos) {
        const clienteProyecto = new ClienteProyecto();
        clienteProyecto.proyecto = savedProyecto;
        clienteProyecto.cliente = { id: cp.clienteId } as any;
        await this.clienteProyectoRepository.save(clienteProyecto);
      }
    }

    return this.findById(savedProyecto.id);
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto): Promise<Proyecto> {
    const proyecto = await this.findById(id);
    Object.assign(proyecto, updateProyectoDto);
    await this.proyectoRepository.save(proyecto);
  
    if (updateProyectoDto.personalProyectos) {
      await this.personalProyectoRepository.delete({ proyecto: { id } });
      for (const pp of updateProyectoDto.personalProyectos) {
        const personalProyecto = new PersonalProyecto();
        personalProyecto.proyecto = proyecto; // Usa el objeto proyecto completo
        personalProyecto.personal = { id: pp.personalId } as any;
        personalProyecto.rol = pp.rol;
        await this.personalProyectoRepository.save(personalProyecto);
      }
    }
  
    if (updateProyectoDto.clienteProyectos) {
      await this.clienteProyectoRepository.delete({ proyecto: { id } });
      for (const cp of updateProyectoDto.clienteProyectos) {
        const clienteProyecto = new ClienteProyecto();
        clienteProyecto.proyecto = proyecto; // Usa el objeto proyecto completo
        clienteProyecto.cliente = { id: cp.clienteId } as any;
        await this.clienteProyectoRepository.save(clienteProyecto);
      }
    }
  
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    const proyecto = await this.proyectoRepository.findOne({
      where: { id },
      relations: ['personalProyectos', 'clienteProyectos'],
    });
    if (!proyecto) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  
    // Remove related records
    if (proyecto.personalProyectos) {
      await this.personalProyectoRepository.remove(proyecto.personalProyectos);
    }
    if (proyecto.clienteProyectos) {
      await this.clienteProyectoRepository.remove(proyecto.clienteProyectos);
    }
  
    // Then delete the project
    await this.proyectoRepository.remove(proyecto);
  }

  async getPersonalProyecto(id: number) {
    return this.personalProyectoRepository.find({
      where: { proyecto: { id } },
      relations: ['personal'],
    });
  }

  async getClientesProyecto(id: number) {
    return this.clienteProyectoRepository.find({
      where: { proyecto: { id } },
      relations: ['cliente'],
    });
  }
}