import { ClienteProyectoRepositoryInterface } from '../domain/repositories/cliente-proyecto.repository.interface';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from './dtos/cliente-proyecto.dto';
import { ClienteProyecto } from '../domain/entities/cliente-proyecto.entity';
import { ClienteRepositoryInterface } from 'src/modules/cliente/domain/repositories/cliente.repository.interface';
import { IProyectoRepository } from 'src/modules/proyectos/domain/repositories/proyecto.repository.interface';
export declare class ClienteProyectoService {
    private readonly clienteProyectoRepository;
    private readonly clienteRepository;
    private proyectoRepository;
    constructor(clienteProyectoRepository: ClienteProyectoRepositoryInterface, clienteRepository: ClienteRepositoryInterface, proyectoRepository: IProyectoRepository);
    create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto>;
    findAll(): Promise<ClienteProyecto[]>;
    findOne(id: number): Promise<ClienteProyecto>;
    update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto>;
    remove(id: number): Promise<void>;
    findAllForProyecto(proyectoId: number): Promise<ClienteProyecto[]>;
}
