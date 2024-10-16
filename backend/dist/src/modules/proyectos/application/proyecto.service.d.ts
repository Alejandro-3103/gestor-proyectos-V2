import { Proyecto } from '../domain/entities/proyecto.entity';
import { CreateProyectoDto, UpdateProyectoDto } from './dtos/proyecto.dto';
import { IProyectoRepository } from '../domain/repositories/proyecto.repository.interface';
import { PersonalProyectoRepositoryInterface } from '../../personal-proyecto/domain/repositories/personal-proyecto.repository.interface';
import { ClienteProyectoRepositoryInterface } from '../../cliente-proyecto/domain/repositories/cliente-proyecto.repository.interface';
import { PersonalProyecto } from '../../personal-proyecto/domain/entities/personal-proyecto.entity';
import { ClienteProyecto } from '../../cliente-proyecto/domain/entities/cliente-proyecto.entity';
export declare class ProyectoService {
    private proyectoRepository;
    private personalProyectoRepository;
    private clienteProyectoRepository;
    constructor(proyectoRepository: IProyectoRepository, personalProyectoRepository: PersonalProyectoRepositoryInterface, clienteProyectoRepository: ClienteProyectoRepositoryInterface);
    findAll(): Promise<Proyecto[]>;
    findById(id: number): Promise<Proyecto>;
    create(createProyectoDto: CreateProyectoDto): Promise<Proyecto>;
    update(id: number, updateProyectoDto: UpdateProyectoDto): Promise<Proyecto>;
    delete(id: number): Promise<void>;
    getPersonalProyecto(id: number): Promise<PersonalProyecto[]>;
    getClientesProyecto(id: number): Promise<ClienteProyecto[]>;
}
