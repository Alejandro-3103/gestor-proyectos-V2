import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from '../../domain/entities/proyecto.entity';
import { IProyectoRepository } from '../../domain/repositories/proyecto.repository.interface';

@Injectable()
export class TypeOrmProyectoRepository implements IProyectoRepository {
  constructor(
    @InjectRepository(Proyecto)
    private readonly repository: Repository<Proyecto>,
  ) {}

  async find(options?: any): Promise<Proyecto[]> {
    return this.repository.find(options);
  }

  async findOne(options: any): Promise<Proyecto | undefined> {
    return this.repository.findOne(options);
  }

  async save(proyecto: Partial<Proyecto>): Promise<Proyecto> {
    return this.repository.save(proyecto);
  }

  async remove(proyecto: Proyecto): Promise<Proyecto> {
    return this.repository.remove(proyecto);
  }

  async delete(criteria: any): Promise<any> {
    return this.repository.delete(criteria);
  }
}