import { Staff } from '../../../staff/domain/entities/staff.entity';
import { Proyecto } from '../../../proyectos/domain/entities/proyecto.entity';
export declare class PersonalProyecto {
    id: number;
    personal: Staff;
    proyecto: Proyecto;
    fechaAsignacion: Date;
    rol: string;
}
