import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from '../../application/dtos/personal-proyecto.dto';
import { PersonalProyecto } from '../entities/personal-proyecto.entity';
export interface PersonalProyectoRepositoryInterface {
    create(createClienteProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto>;
    find(options?: any): Promise<PersonalProyecto[]>;
    findAll(): Promise<PersonalProyecto[]>;
    findOne(id: number): Promise<PersonalProyecto>;
    update(id: number, updateClienteProyectoDto: UpdatePersonalProyectoDto): Promise<PersonalProyecto>;
    save(personalproyecto: Partial<PersonalProyecto>): Promise<PersonalProyecto>;
    remove(personalProyecto: PersonalProyecto | PersonalProyecto[]): Promise<PersonalProyecto | PersonalProyecto[]>;
    delete(criteria: any): Promise<any>;
}
