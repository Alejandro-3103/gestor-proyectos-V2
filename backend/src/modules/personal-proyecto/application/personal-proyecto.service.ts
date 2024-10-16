import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PersonalProyectoRepositoryInterface } from '../domain/repositories/personal-proyecto.repository.interface';
import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from './dtos/personal-proyecto.dto';
import { PersonalProyecto } from '../domain/entities/personal-proyecto.entity';

@Injectable()
export class PersonalProyectoService {
    constructor(
        @Inject('PersonalProyectoRepositoryInterface')
        private readonly personalProyectoRepository: PersonalProyectoRepositoryInterface,
      ) {}

  async create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto> {
    return this.personalProyectoRepository.create(createPersonalProyectoDto);
  }

  async findAll(): Promise<PersonalProyecto[]> {
    return this.personalProyectoRepository.findAll();
  }

  async findOne(id: number): Promise<PersonalProyecto> {
    const personalProyecto = await this.personalProyectoRepository.findOne(id);
    if (!personalProyecto) {
      throw new NotFoundException(`PersonalProyecto with ID ${id} not found`);
    }
    return personalProyecto;
  }

  async update(id: number, updatePersonalProyectoDto: UpdatePersonalProyectoDto): Promise<PersonalProyecto> {
    await this.findOne(id);
    return this.personalProyectoRepository.update(id, updatePersonalProyectoDto);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.findOne(id);
    if (entity) {
      await this.personalProyectoRepository.remove(entity);
    }
  }
}