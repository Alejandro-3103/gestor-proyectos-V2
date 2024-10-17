import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Cliente } from '../../domain/entities/cliente.entity';
import { ClienteRepositoryInterface } from '../../domain/repositories/cliente.repository.interface';
import { CreateClienteDto } from '../../application/dtos/cliente.dto';

@Injectable()
export class ClienteRepository implements ClienteRepositoryInterface {
  constructor(
    @InjectRepository(Cliente)
    private readonly repository: Repository<Cliente>,
  ) {}

  async findOneById(id: number): Promise<Cliente | null> {
    return this.repository.findOne({ where: { id } });
  }
  
  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.repository.create(createClienteDto);
    return this.repository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateClienteDto: Partial<Cliente>): Promise<Cliente> {
    await this.repository.update(id, updateClienteDto);
    return this.findOne(id);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return this.repository.delete(criteria);
  }

  async remove(cliente: Cliente): Promise<Cliente> {
    return this.repository.remove(cliente);
  }
}