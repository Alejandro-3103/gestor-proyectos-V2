import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PersonalProyectoRepositoryInterface } from '../domain/repositories/personal-proyecto.repository.interface';
import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from './dtos/personal-proyecto.dto';
import { PersonalProyecto } from '../domain/entities/personal-proyecto.entity';
import { StaffRepositoryInterface } from 'src/modules/staff/domain/repositories/staff.repository.interface';
import { IProyectoRepository } from 'src/modules/proyectos/domain/repositories/proyecto.repository.interface';

@Injectable()
export class PersonalProyectoService {
    constructor(
        @Inject('PersonalProyectoRepositoryInterface')
        private readonly personalProyectoRepository: PersonalProyectoRepositoryInterface,
        @Inject('StaffRepositoryInterface')
        private staffRepository: StaffRepositoryInterface,
        @Inject('IProyectoRepository')
        private proyectoRepository: IProyectoRepository,
      ) {}

    async create(createPersonalProyectoDto: CreatePersonalProyectoDto): Promise<PersonalProyecto> {
      const { personalId, proyectoId, rol } = createPersonalProyectoDto;
  
      const personal = await this.staffRepository.findOne({ where: { id: personalId } });
      if (!personal) {
        throw new NotFoundException(`Personal with ID ${personalId} not found`);
      }

      const proyecto = await this.proyectoRepository.findOne({ where: { id: proyectoId } });
      if (!proyecto) {
        throw new NotFoundException(`Proyecto with ID ${proyectoId} not found`);
      }
      const personalProyecto = await this.personalProyectoRepository.create({
        personalId: personal.id,
        proyectoId: proyecto.id,
        fechaAsignacion: new Date(),
        rol: rol, // Use the rol from the DTO
      });
        
      return await this.personalProyectoRepository.save(personalProyecto);
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
    const personalProyecto = await this.personalProyectoRepository.findOne(id);
    if (!personalProyecto) {
      throw new NotFoundException(`PersonalProyecto with ID ${id} not found`);
    }
    await this.personalProyectoRepository.remove(personalProyecto);
  }

  async findAllForProyecto(proyectoId: number): Promise<PersonalProyecto[]> {
    return this.personalProyectoRepository.findAllForProyecto(proyectoId);
  }
}