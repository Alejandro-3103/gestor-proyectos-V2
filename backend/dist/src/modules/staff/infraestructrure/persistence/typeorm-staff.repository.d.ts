import { FindOneOptions, Repository } from 'typeorm';
import { Staff } from '../../domain/entities/staff.entity';
import { StaffRepositoryInterface } from '../../domain/repositories/staff.repository.interface';
export declare class TypeOrmStaffRepository implements StaffRepositoryInterface {
    private staffRepository;
    constructor(staffRepository: Repository<Staff>);
    create(staff: Staff): Promise<Staff>;
    findAll(): Promise<Staff[]>;
    findOne(options: FindOneOptions<Staff>): Promise<Staff | undefined>;
    remove(staff: Staff): Promise<Staff>;
    findbyId(id: number): Promise<Staff>;
    save(staff: Partial<Staff>): Promise<Staff>;
    update(id: number, staff: Partial<Staff>): Promise<Staff>;
    delete(id: number): Promise<void>;
}
