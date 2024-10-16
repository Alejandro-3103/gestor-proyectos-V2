import { DeleteResult, Repository } from 'typeorm';
import { Cliente } from '../../domain/entities/cliente.entity';
import { ClienteRepositoryInterface } from '../../domain/repositories/cliente.repository.interface';
import { CreateClienteDto } from '../../application/dtos/cliente.dto';
export declare class ClienteRepository implements ClienteRepositoryInterface {
    private readonly repository;
    constructor(repository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
    update(id: number, updateClienteDto: Partial<Cliente>): Promise<Cliente>;
    delete(criteria: any): Promise<DeleteResult>;
    remove(cliente: Cliente): Promise<Cliente>;
}
