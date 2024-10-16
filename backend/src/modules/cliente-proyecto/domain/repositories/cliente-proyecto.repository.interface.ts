import { ClienteProyecto } from '../entities/cliente-proyecto.entity';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';

export interface ClienteProyectoRepositoryInterface {
  create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto>;
  find(options?: any): Promise<ClienteProyecto[]>;
  findAll(): Promise<ClienteProyecto[]>;
  findOne(options: any): Promise<ClienteProyecto>;
  update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto>;
  remove(clienteProyecto: ClienteProyecto | ClienteProyecto[]): Promise<ClienteProyecto | ClienteProyecto[]>;
  save(clienteproyecto: Partial<ClienteProyecto>): Promise<ClienteProyecto>;
  delete(criteria: any): Promise<any>;
}