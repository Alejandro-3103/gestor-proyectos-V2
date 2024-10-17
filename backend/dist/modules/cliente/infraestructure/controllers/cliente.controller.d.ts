import { ClienteService } from '../../application/cliente.service';
import { CreateClienteDto, UpdateClienteDto } from '../../application/dtos/cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("../../domain/entities/cliente.entity").Cliente>;
    findAll(): Promise<import("../../domain/entities/cliente.entity").Cliente[]>;
    findOne(id: string): Promise<import("../../domain/entities/cliente.entity").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import("../../domain/entities/cliente.entity").Cliente>;
    remove(id: string): Promise<void>;
}
