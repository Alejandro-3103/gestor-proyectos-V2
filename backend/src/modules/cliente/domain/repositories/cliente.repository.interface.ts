import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto} from '../../application/dtos/cliente.dto';
import { DeleteResult } from 'typeorm';

export interface ClienteRepositoryInterface {
  create(createClienteDto: CreateClienteDto): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;
  findOne(id: number): Promise<Cliente>;
  update(id: number, UpdateClienteDto: Partial<Cliente>): Promise<Cliente>;
  remove(cliente: Cliente): Promise<Cliente>;
  delete(criteria: any): Promise<DeleteResult>;
}