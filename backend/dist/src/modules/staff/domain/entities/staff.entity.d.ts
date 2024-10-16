import { PersonalProyecto } from '../../../personal-proyecto/domain/entities/personal-proyecto.entity';
export declare class Staff {
    id: number;
    nombre: string;
    correoElectronico: string;
    posicion: string;
    fechaContratacion: Date;
    personalProyectos: PersonalProyecto[];
}
