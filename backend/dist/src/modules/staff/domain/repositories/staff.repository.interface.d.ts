import { FindOneOptions } from 'typeorm';
import { Staff } from '../entities/staff.entity';
export interface StaffRepositoryInterface {
    findAll(): Promise<Staff[]>;
    findbyId(id: number): Promise<Staff>;
    save(staff: Staff): Promise<Staff>;
    findOne(options: FindOneOptions<Staff>): Promise<Staff | undefined>;
    create(staff: Staff): Promise<Staff>;
    update(id: number, staff: Partial<Staff>): Promise<Staff>;
    remove(staff: Staff): Promise<Staff>;
    delete(id: number): Promise<void>;
}
