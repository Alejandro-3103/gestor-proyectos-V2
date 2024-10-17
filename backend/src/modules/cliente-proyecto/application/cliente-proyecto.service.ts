import { Injectable, Inject, NotFoundException, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { ClienteProyectoRepositoryInterface } from '../domain/repositories/cliente-proyecto.repository.interface';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from './dtos/cliente-proyecto.dto';
import { ClienteProyecto } from '../domain/entities/cliente-proyecto.entity';
import { ClienteRepositoryInterface } from 'src/modules/cliente/domain/repositories/cliente.repository.interface';
import { IProyectoRepository } from 'src/modules/proyectos/domain/repositories/proyecto.repository.interface';

@Injectable()
export class ClienteProyectoService {
  constructor(
    @Inject('ClienteProyectoRepositoryInterface')
    private readonly clienteProyectoRepository: ClienteProyectoRepositoryInterface,
    @Inject('ClienteRepositoryInterface')
    private readonly clienteRepository: ClienteRepositoryInterface,
    @Inject('IProyectoRepository')
    private proyectoRepository: IProyectoRepository,
  ) {}

  async create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto> {
    const { clienteId, proyectoId } = createClienteProyectoDto;
    
    const cliente = await this.clienteRepository.findOne(clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${clienteId} not found`);
    }
  
    const proyecto = await this.proyectoRepository.findOne({ where: { id: proyectoId } });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto with ID ${proyectoId} not found`);
    }
    
    const clienteProyecto = await this.clienteProyectoRepository.create({
      clienteId: cliente.id,
      proyectoId: proyecto.id,
      fechaAsignacion: new Date(),
    });
    
    return await this.clienteProyectoRepository.save(clienteProyecto);
  }

  async findAll(): Promise<ClienteProyecto[]> {
    return this.clienteProyectoRepository.findAll();
  }

  async findOne(id: number): Promise<ClienteProyecto> {
    const clienteProyecto = await this.clienteProyectoRepository.findOneById(id, ['cliente', 'proyecto']);
    if (!clienteProyecto) {
      throw new NotFoundException(`ClienteProyecto with ID ${id} not found`);
    }
    return clienteProyecto;
  }

  async remove(id: number): Promise<void> {
    const clienteProyecto = await this.clienteProyectoRepository.findOneById(id, ['cliente', 'proyecto']);
    if (!clienteProyecto) {
      throw new NotFoundException(`ClienteProyecto with ID ${id} not found`);
    }
    await this.clienteProyectoRepository.remove(clienteProyecto);
  }
  
  async update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto> {
    const clienteProyecto = await this.findOne(id);
    Object.assign(clienteProyecto, updateClienteProyectoDto);
    return await this.clienteProyectoRepository.save(clienteProyecto);
  }

  async findAllForProyecto(proyectoId: number): Promise<ClienteProyecto[]> {
    return this.clienteProyectoRepository.findAllForProyecto(proyectoId);
  }
}