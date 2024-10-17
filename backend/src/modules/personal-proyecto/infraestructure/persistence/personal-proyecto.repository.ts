import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { PersonalProyecto } from '../../domain/entities/personal-proyecto.entity';
import { PersonalProyectoRepositoryInterface } from '../../domain/repositories/personal-proyecto.repository.interface';
import { CreatePersonalProyectoDto } from '../../application/dtos/personal-proyecto.dto';

@Injectable()
export class PersonalProyectoRepository implements PersonalProyectoRepositoryInterface {
  constructor(
    @InjectRepository(PersonalProyecto)
    private readonly repository: Repository<PersonalProyecto>,
  ) {}

  async findOneById(id: number, relations?: string[]): Promise<PersonalProyecto | null> {
    return this.repository.findOne({ where: { id }, relations });
  }

  async create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto> {
    const personalProyecto = this.repository.create(createPersonalProyectoDto);
    return this.repository.save(personalProyecto);
  }

  async findAll(): Promise<PersonalProyecto[]> {
    return this.repository.find({ relations: ['personal', 'proyecto'] });
  }

  async findAllForProyecto(proyectoId: number): Promise<PersonalProyecto[]> {
    return this.repository.find({
      where: { proyecto: { id: proyectoId } },
      relations: ['personal'],
    });
  }

  async findOne(id: number): Promise<PersonalProyecto> {
    return this.repository.findOne({ where: { id }, relations: ['personal', 'proyecto'] });
  }

  async update(id: number, updatePersonalProyectoDto: Partial<PersonalProyecto>): Promise<PersonalProyecto> {
    await this.repository.update(id, updatePersonalProyectoDto);
    return this.findOne(id);
  }

  async find(options?: FindManyOptions<PersonalProyecto>): Promise<PersonalProyecto[]> {
    return this.repository.find(options);
  }

  async save(personalProyecto: PersonalProyecto): Promise<PersonalProyecto> {
    return this.repository.save(personalProyecto);
  }

  async remove(personalProyecto: PersonalProyecto | PersonalProyecto[]): Promise<PersonalProyecto | PersonalProyecto[]> {
    if (Array.isArray(personalProyecto)) {
      return this.repository.remove(personalProyecto);
    } else {
      return this.repository.remove([personalProyecto]).then(result => result[0]);
    }
  }

  async delete(criteria: any): Promise<any> {
    return this.repository.delete(criteria);
  }
}