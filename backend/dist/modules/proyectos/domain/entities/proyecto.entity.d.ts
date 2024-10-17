import { PersonalProyecto } from '../../../personal-proyecto/domain/entities/personal-proyecto.entity';
import { ClienteProyecto } from "../../../cliente-proyecto/domain/entities/cliente-proyecto.entity";
export declare class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: string;
    clienteProyectos: ClienteProyecto[];
    personalProyectos: PersonalProyecto[];
}
