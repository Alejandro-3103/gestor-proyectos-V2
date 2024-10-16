import { ClienteProyectoService } from '../../application/cliente-proyecto.service';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';
export declare class ClienteProyectoController {
    private readonly clienteProyectoService;
    constructor(clienteProyectoService: ClienteProyectoService);
    create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<import("../../domain/entities/cliente-proyecto.entity").ClienteProyecto>;
    findOne(id: string): Promise<import("../../domain/entities/cliente-proyecto.entity").ClienteProyecto>;
    findAllForProyecto(proyectoId: string): Promise<import("../../domain/entities/cliente-proyecto.entity").ClienteProyecto[]>;
    update(id: string, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<import("../../domain/entities/cliente-proyecto.entity").ClienteProyecto>;
    remove(id: string): Promise<void>;
}
