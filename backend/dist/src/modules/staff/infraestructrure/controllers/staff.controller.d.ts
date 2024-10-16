import { StaffService } from '../../application/staff.service';
import { CreateStaffDto, UpdateStaffDto } from '../../application/dtos/staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    create(createStaffDto: CreateStaffDto): Promise<import("../../domain/entities/staff.entity").Staff>;
    findAll(): Promise<import("../../domain/entities/staff.entity").Staff[]>;
    findOne(id: string): Promise<import("../../domain/entities/staff.entity").Staff>;
    update(id: string, updateStaffDto: UpdateStaffDto): Promise<import("../../domain/entities/staff.entity").Staff>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
