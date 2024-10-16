"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const staff_entity_1 = require("../domain/entities/staff.entity");
let StaffService = class StaffService {
    constructor(staffRepository, personalProyectoRepository) {
        this.staffRepository = staffRepository;
        this.personalProyectoRepository = personalProyectoRepository;
    }
    async create(createStaffDto) {
        const staff = new staff_entity_1.Staff();
        Object.assign(staff, createStaffDto);
        return this.staffRepository.save(staff);
    }
    async findAll() {
        return this.staffRepository.findAll();
    }
    async findbyId(id) {
        return this.staffRepository.findbyId(id);
    }
    update(id, updateStaffDto) {
        return this.staffRepository.update(id, updateStaffDto);
    }
    async delete(id) {
        const staff = await this.staffRepository.findOne({
            where: { id },
            relations: ['personalProyectos']
        });
        if (!staff) {
            throw new common_1.NotFoundException(`Staff with ID ${id} not found`);
        }
        if (staff.personalProyectos && staff.personalProyectos.length > 0) {
            await this.personalProyectoRepository.remove(staff.personalProyectos);
        }
        await this.staffRepository.remove(staff);
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('StaffRepositoryInterface')),
    __param(1, (0, common_1.Inject)('PersonalProyectoRepositoryInterface')),
    __metadata("design:paramtypes", [Object, Object])
], StaffService);
//# sourceMappingURL=staff.service.js.map