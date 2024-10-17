import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { ClienteProyecto } from '../../domain/entities/cliente-proyecto.entity';
import { ClienteProyectoRepositoryInterface } from '../../domain/repositories/cliente-proyecto.repository.interface';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';

@Injectable()
export class ClienteProyectoRepository implements ClienteProyectoRepositoryInterface {
  constructor(
    @InjectRepository(ClienteProyecto)
    private repository: Repository<ClienteProyecto>,
  ) {}
  
  async findOneById(id: number, relations?: string[]): Promise<ClienteProyecto | null> {
    return this.repository.findOne({ where: { id }, relations });
  }

  async create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto> {
    const clienteProyecto = this.repository.create(createClienteProyectoDto);
    return this.repository.save(clienteProyecto);
  }

  async findAll(): Promise<ClienteProyecto[]> {
    return this.repository.find({
      relations: ['cliente', 'proyecto'],
    });
  }

  async findAllForProyecto(proyectoId: number): Promise<ClienteProyecto[]> {
    return this.repository.find({
      where: { proyecto: { id: proyectoId } },
      relations: ['cliente'],
    });
  }

  async findOne(options: FindManyOptions<ClienteProyecto>): Promise<ClienteProyecto | null> {
    return this.repository.findOne(options);
  }

  async update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto> {
    await this.repository.update(id, updateClienteProyectoDto);
    return this.findOne({ where: { id } });
  }

  async remove(clienteProyecto: ClienteProyecto | ClienteProyecto[]): Promise<ClienteProyecto | ClienteProyecto[]> {
    if (Array.isArray(clienteProyecto)) {
      return this.repository.remove(clienteProyecto);
    } else {
      return this.repository.remove([clienteProyecto]).then(result => result[0]);
    }
  }

  async delete(criteria: any): Promise<any> {
    return this.repository.delete(criteria);
  }

  async find(options?: FindManyOptions<ClienteProyecto>): Promise<ClienteProyecto[]> {
    return this.repository.find(options);
  }

  async save(clienteProyecto: ClienteProyecto): Promise<ClienteProyecto> {
    return this.repository.save(clienteProyecto);
  }
}