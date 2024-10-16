import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ClienteRepositoryInterface } from '../domain/repositories/cliente.repository.interface';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';
import { Cliente } from '../domain/entities/cliente.entity';
import { ClienteProyectoRepositoryInterface } from 'src/modules/cliente-proyecto/domain/repositories/cliente-proyecto.repository.interface';

@Injectable()
export class ClienteService {
    constructor(
        @Inject('ClienteRepositoryInterface')
        private readonly clienteRepository: ClienteRepositoryInterface,
        @Inject('ClienteProyectoRepositoryInterface')
        private clienteProyectoRepository: ClienteProyectoRepositoryInterface
      ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clienteRepository.create(createClienteDto);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.findAll();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    await this.findOne(id);
    return this.clienteRepository.update(id, updateClienteDto);
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }

} 