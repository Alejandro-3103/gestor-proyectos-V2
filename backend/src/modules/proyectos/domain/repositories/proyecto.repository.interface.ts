import { FindOneOptions } from 'typeorm';
import { Proyecto } from '../entities/proyecto.entity';

export interface IProyectoRepository {
  find(options?: any): Promise<Proyecto[]>;
  findOne(options: FindOneOptions<Proyecto>): Promise<Proyecto | null>;
  save(proyecto: Partial<Proyecto>): Promise<Proyecto>;
  remove(proyecto: Proyecto): Promise<Proyecto>;
  delete(proyecto: Proyecto): Promise<Proyecto>;
  findOneById(id: number): Promise<Proyecto | null>;
}