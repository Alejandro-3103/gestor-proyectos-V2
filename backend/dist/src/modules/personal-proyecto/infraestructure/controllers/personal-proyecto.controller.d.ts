import { PersonalProyectoService } from '../../application/personal-proyecto.service';
import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from '../../application/dtos/personal-proyecto.dto';
export declare class PersonalProyectoController {
    private readonly personalProyectoService;
    constructor(personalProyectoService: PersonalProyectoService);
    create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<import("../../domain/entities/personal-proyecto.entity").PersonalProyecto>;
    findAll(): Promise<import("../../domain/entities/personal-proyecto.entity").PersonalProyecto[]>;
    findOne(id: string): Promise<import("../../domain/entities/personal-proyecto.entity").PersonalProyecto>;
    update(id: string, updatePersonalProyectoDto: UpdatePersonalProyectoDto): Promise<import("../../domain/entities/personal-proyecto.entity").PersonalProyecto>;
    remove(id: string): Promise<void>;
}
