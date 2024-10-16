import { FindManyOptions, Repository } from 'typeorm';
import { PersonalProyecto } from '../../domain/entities/personal-proyecto.entity';
import { PersonalProyectoRepositoryInterface } from '../../domain/repositories/personal-proyecto.repository.interface';
import { CreatePersonalProyectoDto } from '../../application/dtos/personal-proyecto.dto';
export declare class PersonalProyectoRepository implements PersonalProyectoRepositoryInterface {
    private readonly repository;
    constructor(repository: Repository<PersonalProyecto>);
    create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto>;
    findAll(): Promise<PersonalProyecto[]>;
    findOne(id: number): Promise<PersonalProyecto>;
    update(id: number, updatePersonalProyectoDto: Partial<PersonalProyecto>): Promise<PersonalProyecto>;
    find(options?: FindManyOptions<PersonalProyecto>): Promise<PersonalProyecto[]>;
    save(personalProyecto: PersonalProyecto): Promise<PersonalProyecto>;
    remove(personalProyecto: PersonalProyecto | PersonalProyecto[]): Promise<PersonalProyecto | PersonalProyecto[]>;
    delete(criteria: any): Promise<any>;
}
