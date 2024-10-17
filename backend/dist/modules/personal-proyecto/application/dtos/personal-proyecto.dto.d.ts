export declare class CreatePersonalProyectoDto {
    personalId: number;
    proyectoId: number;
    fechaAsignacion: Date;
    rol: string;
}
export declare class UpdatePersonalProyectoDto {
    personalId?: number;
    proyectoId?: number;
    fechaAsignacion?: Date;
    rol?: string;
}
export declare class PersonalProyectoDto {
    id: number;
    personalId: number;
    proyectoId: number;
    fechaAsignacion: Date;
    rol: string;
}
