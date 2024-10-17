import { PersonalProyectoDto } from '../../../personal-proyecto/application/dtos/personal-proyecto.dto';
export declare class CreateStaffDto {
    id: number;
    nombre: string;
    correoElectronico: string;
    posicion: string;
    fechaContratacion: Date;
}
export declare class UpdateStaffDto {
    id: number;
    nombre?: string;
    correoElectronico?: string;
    posicion?: string;
    fechaContratacion?: Date;
}
export declare class StaffDto {
    id: number;
    nombre: string;
    correoElectronico: string;
    posicion: string;
    fechaContratacion: Date;
    personalProyectos?: PersonalProyectoDto[];
}
