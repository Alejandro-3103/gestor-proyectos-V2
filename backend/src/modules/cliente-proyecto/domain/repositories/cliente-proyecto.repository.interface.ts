import { FindManyOptions } from 'typeorm';
import { ClienteProyecto } from '../entities/cliente-proyecto.entity';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';

export interface ClienteProyectoRepositoryInterface {
  findOneById(id: number, relations?: string[]): Promise<ClienteProyecto | null>;
  create(createClienteProyectoDto: CreateClienteProyectoDto): Promise<ClienteProyecto>;
  findAll(): Promise<ClienteProyecto[]>;
  findAllForProyecto(proyectoId: number): Promise<ClienteProyecto[]>;
  findOne(options: FindManyOptions<ClienteProyecto>): Promise<ClienteProyecto | null>;
  update(id: number, updateClienteProyectoDto: UpdateClienteProyectoDto): Promise<ClienteProyecto>;
  remove(clienteProyecto: ClienteProyecto | ClienteProyecto[]): Promise<ClienteProyecto | ClienteProyecto[]>;
  delete(criteria: any): Promise<any>;
  find(options?: FindManyOptions<ClienteProyecto>): Promise<ClienteProyecto[]>;
  save(clienteProyecto: ClienteProyecto): Promise<ClienteProyecto>;
}