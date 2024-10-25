import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Not, Repository } from 'typeorm';
import { Staff } from '../../domain/entities/staff.entity';
import { StaffRepositoryInterface } from '../../domain/repositories/staff.repository.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class TypeOrmStaffRepository implements StaffRepositoryInterface {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async create(staff: Staff): Promise<Staff> {
    // 1. Validaciones de correo y contraseña
    if (typeof staff.correoElectronico !== 'string') {
      throw new BadRequestException('correoElectronico debe ser un string');
    }
    if (staff.correoElectronico.length < 7) {
      throw new BadRequestException('correoElectronico debe tener al menos 7 caracteres');
    }

    if (typeof staff.contraseña !== 'string') {
      throw new BadRequestException('contraseña debe ser un string');
    }
    if (staff.contraseña.length < 7) {
      throw new BadRequestException('contraseña debe tener al menos 7 caracteres');
    }

    // 2. Comprobar si ya existe el correo
    const existingStaff = await this.staffRepository.findOne({
      where: { correoElectronico: staff.correoElectronico },
    });

    if (existingStaff) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    staff.contraseña = bcrypt.hashSync(staff.contraseña, 10)

    // 3. Guardar el nuevo staff
    return this.staffRepository.save(staff);
  }

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async findOne(options: FindOneOptions<Staff>): Promise<Staff | null> {
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
    // 1. Validaciones de correo
    if (typeof staff.correoElectronico !== 'undefined' && typeof staff.correoElectronico !== 'string') {
      throw new BadRequestException('correoElectronico debe ser un string');
    }
    if (typeof staff.correoElectronico !== 'undefined' && staff.correoElectronico.length < 7) {
      throw new BadRequestException('correoElectronico debe tener al menos 7 caracteres');
    }
  
    // 2. Comprobar si el correo ya existe (excluyendo el usuario actual)
    if (staff.correoElectronico) {
      const existingStaff = await this.staffRepository.findOne({
        where: { correoElectronico: staff.correoElectronico, id: Not(id) }, // Excluir el usuario actual
      });
  
      if (existingStaff) {
        throw new ConflictException('El correo electrónico ya está registrado');
      }
    }
  
    // 3. Hashear la contraseña solo si se proporciona
    if (staff.contraseña) {
      if (typeof staff.contraseña !== 'string') {
        throw new BadRequestException('contraseña debe ser un string');
      }
      if (staff.contraseña.length < 7) {
        throw new BadRequestException('contraseña debe tener al menos 7 caracteres');
      }
      staff.contraseña = bcrypt.hashSync(staff.contraseña, 10);
    }
  
    // 4. Actualizar el usuario
    await this.staffRepository.update(id, staff);
    return this.findbyId(id);
  }

  async delete(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}
