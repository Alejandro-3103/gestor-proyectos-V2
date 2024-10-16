import { ProyectoService } from '../../application/proyecto.service';
import { CreateProyectoDto, UpdateProyectoDto } from '../../application/dtos/proyecto.dto';
export declare class ProyectoController {
    private readonly proyectoService;
    constructor(proyectoService: ProyectoService);
    findAll(): Promise<import("../../domain/entities/proyecto.entity").Proyecto[]>;
    findById(id: number): Promise<import("../../domain/entities/proyecto.entity").Proyecto>;
    create(createProyectoDto: CreateProyectoDto): Promise<import("../../domain/entities/proyecto.entity").Proyecto>;
    update(id: number, updateProyectoDto: UpdateProyectoDto): Promise<import("../../domain/entities/proyecto.entity").Proyecto>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getPersonalProyecto(id: string): Promise<import("../../../personal-proyecto/domain/entities/personal-proyecto.entity").PersonalProyecto[]>;
    getClientesProyecto(id: string): Promise<import("../../../cliente-proyecto/domain/entities/cliente-proyecto.entity").ClienteProyecto[]>;
}
