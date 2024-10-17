export declare class CreateProyectoDto {
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin?: Date;
    estado: string;
    personalProyectos?: CreatePersonalProyectoDto[];
    clienteProyectos?: CreateClienteProyectoDto[];
}
export declare class UpdateProyectoDto {
    nombre?: string;
    descripcion?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    estado?: string;
    personalProyectos?: CreatePersonalProyectoDto[];
    clienteProyectos?: CreateClienteProyectoDto[];
}
export declare class CreateClienteProyectoDto {
    clienteId: number;
    proyectoId: number;
    fechaAsignacion: Date;
}
export declare class CreatePersonalProyectoDto {
    personalId: number;
    proyectoId: number;
    fechaAsignacion: Date;
    rol: string;
}
