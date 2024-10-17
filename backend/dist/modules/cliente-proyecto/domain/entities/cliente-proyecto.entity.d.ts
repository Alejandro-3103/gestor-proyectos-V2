import { Cliente } from '../../../cliente/domain/entities/cliente.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';
export declare class ClienteProyecto {
    id: number;
    cliente: Cliente;
    proyecto: Proyecto;
    fechaAsignacion: Date;
}
