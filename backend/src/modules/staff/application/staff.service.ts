import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Staff } from '../domain/entities/staff.entity';
import { CreateStaffDto, UpdateStaffDto } from './dtos/staff.dto';
import { StaffRepositoryInterface } from '../domain/repositories/staff.repository.interface';
import { PersonalProyectoRepositoryInterface } from 'src/modules/personal-proyecto/domain/repositories/personal-proyecto.repository.interface';
@Injectable()
export class StaffService {
    constructor(
        @Inject('StaffRepositoryInterface')
        private staffRepository: StaffRepositoryInterface,
        @Inject('PersonalProyectoRepositoryInterface')
        private personalProyectoRepository: PersonalProyectoRepositoryInterface
      ) {}

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const staff = new Staff();
    Object.assign(staff, createStaffDto);
    return this.staffRepository.save(staff);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.findAll();
  }

  async findbyId(id: number): Promise<Staff> {
    return this.staffRepository.findbyId(id);
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return this.staffRepository.update(id, updateStaffDto);
  }

  async delete(id: number): Promise<void> {
    const staff = await this.staffRepository.findOne({
      where: { id },
      relations: ['personalProyectos']
    });

    if (!staff) {
      throw new NotFoundException(`Staff with ID ${id} not found`);
    }

    // Remove related PersonalProyecto entries
    if (staff.personalProyectos && staff.personalProyectos.length > 0) {
      await this.personalProyectoRepository.remove(staff.personalProyectos);
    }

    // Now remove the staff member
    await this.staffRepository.remove(staff);
  }
}