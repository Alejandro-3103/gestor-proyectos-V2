import { PersonalProyectoRepositoryInterface } from '../domain/repositories/personal-proyecto.repository.interface';
import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from './dtos/personal-proyecto.dto';
import { PersonalProyecto } from '../domain/entities/personal-proyecto.entity';
export declare class PersonalProyectoService {
    private readonly personalProyectoRepository;
    constructor(personalProyectoRepository: PersonalProyectoRepositoryInterface);
    create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto>;
    findAll(): Promise<PersonalProyecto[]>;
    findOne(id: number): Promise<PersonalProyecto>;
    update(id: number, updatePersonalProyectoDto: UpdatePersonalProyectoDto): Promise<PersonalProyecto>;
    remove(id: number): Promise<void>;
}
