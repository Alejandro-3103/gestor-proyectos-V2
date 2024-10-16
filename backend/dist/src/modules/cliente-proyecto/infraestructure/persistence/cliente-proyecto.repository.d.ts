import { FindManyOptions, Repository } from 'typeorm';
import { ClienteProyecto } from '../../domain/entities/cliente-proyecto.entity';
import { ClienteProyectoRepositoryInterface } from '../../domain/repositories/cliente-proyecto.repository.interface';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';
export declare class ClienteProyectoRepository implements ClienteProyectoRepositoryInterface {
    private repository;
    constructor(repository: Repository<ClienteProyecto>);
    create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto>;
    findAll(): Promise<ClienteProyecto[]>;
    findOne(id: number): Promise<ClienteProyecto>;
    update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto>;
    remove(clienteProyecto: ClienteProyecto | ClienteProyecto[]): Promise<ClienteProyecto | ClienteProyecto[]>;
    delete(criteria: any): Promise<any>;
    find(options?: FindManyOptions<ClienteProyecto>): Promise<ClienteProyecto[]>;
    save(clienteProyecto: ClienteProyecto): Promise<ClienteProyecto>;
}
