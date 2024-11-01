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
exports.TypeOrmStaffRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staff_entity_1 = require("../../domain/entities/staff.entity");
let TypeOrmStaffRepository = class TypeOrmStaffRepository {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async create(staff) {
        return this.staffRepository.save(staff);
    }
    async findAll() {
        return this.staffRepository.find();
    }
    async findOne(options) {
        return this.staffRepository.findOne(options);
    }
    async remove(staff) {
        return this.staffRepository.remove(staff);
    }
    async findbyId(id) {
        return this.staffRepository.findOne({ where: { id } });
    }
    async save(staff) {
        return this.staffRepository.save(staff);
    }
    async update(id, staff) {
        await this.staffRepository.update(id, staff);
        return this.findbyId(id);
    }
    async delete(id) {
        await this.staffRepository.delete(id);
    }
};
exports.TypeOrmStaffRepository = TypeOrmStaffRepository;
exports.TypeOrmStaffRepository = TypeOrmStaffRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmStaffRepository);
//# sourceMappingURL=typeorm-staff.repository.js.map