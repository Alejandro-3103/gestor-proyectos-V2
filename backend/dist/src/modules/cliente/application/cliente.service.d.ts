import { ClienteRepositoryInterface } from '../domain/repositories/cliente.repository.interface';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';
import { Cliente } from '../domain/entities/cliente.entity';
import { ClienteProyectoRepositoryInterface } from 'src/modules/cliente-proyecto/domain/repositories/cliente-proyecto.repository.interface';
export declare class ClienteService {
    private readonly clienteRepository;
    private clienteProyectoRepository;
    constructor(clienteRepository: ClienteRepositoryInterface, clienteProyectoRepository: ClienteProyectoRepositoryInterface);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    delete(id: number): Promise<void>;
}
