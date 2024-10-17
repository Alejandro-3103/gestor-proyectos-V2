import { ClienteProyecto } from 'src/modules/cliente-proyecto/domain/entities/cliente-proyecto.entity';
export declare class Cliente {
    id: number;
    nombre: string;
    correoElectronico: string;
    Empresa: string;
    fechaRegistro: Date;
    clienteProyectos: ClienteProyecto[];
}
