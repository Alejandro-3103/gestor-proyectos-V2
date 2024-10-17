import { Staff } from '../domain/entities/staff.entity';
import { CreateStaffDto, UpdateStaffDto } from './dtos/staff.dto';
import { StaffRepositoryInterface } from '../domain/repositories/staff.repository.interface';
import { PersonalProyectoRepositoryInterface } from 'src/modules/personal-proyecto/domain/repositories/personal-proyecto.repository.interface';
export declare class StaffService {
    private staffRepository;
    private personalProyectoRepository;
    constructor(staffRepository: StaffRepositoryInterface, personalProyectoRepository: PersonalProyectoRepositoryInterface);
    create(createStaffDto: CreateStaffDto): Promise<Staff>;
    findAll(): Promise<Staff[]>;
    findbyId(id: number): Promise<Staff>;
    update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff>;
    delete(id: number): Promise<void>;
}
