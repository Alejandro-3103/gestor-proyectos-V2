import { ClienteProyectoDto } from 'src/modules/cliente-proyecto/application/dtos/cliente-proyecto.dto';
export declare class CreateClienteDto {
    nombre: string;
    correoElectronico: string;
    empresa: string;
    fechaRegistro?: Date;
}
export declare class UpdateClienteDto {
    nombre: string;
    correoElectronico: string;
    empresa: string;
    fechaRegistro?: Date;
}
export declare class ClienteDto {
    nombre: string;
    correoElectronico: string;
    empresa: string;
    fechaRegistro?: Date;
    clienteProyectoDto?: ClienteProyectoDto[];
}
