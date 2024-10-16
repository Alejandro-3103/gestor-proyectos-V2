import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Staff } from '../../domain/entities/staff.entity';
import { StaffRepositoryInterface } from '../../domain/repositories/staff.repository.interface';

@Injectable()
export class TypeOrmStaffRepository implements StaffRepositoryInterface {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async create(staff: Staff): Promise<Staff> {
    return this.staffRepository.save(staff);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async findOne(options: FindOneOptions<Staff>): Promise<Staff | undefined> {
    return this.staffRepository.findOne(options);
  }

  async remove(staff: Staff): Promise<Staff> {
    return this.staffRepository.remove(staff);
  }
  async findbyId(id: number): Promise<Staff> {
    return this.staffRepository.findOne({ where: { id } });
  }

  async save(staff: Partial<Staff>): Promise<Staff> {
    return this.staffRepository.save(staff);
  }

  async update(id: number, staff: Partial<Staff>): Promise<Staff> {
    await this.staffRepository.update(id, staff);
    return this.findbyId(id);
  }

  async delete(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}