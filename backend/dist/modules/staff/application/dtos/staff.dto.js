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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffDto = exports.UpdateStaffDto = exports.CreateStaffDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const personal_proyecto_dto_1 = require("../../../personal-proyecto/application/dtos/personal-proyecto.dto");
class CreateStaffDto {
}
exports.CreateStaffDto = CreateStaffDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStaffDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaffDto.prototype, "posicion", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateStaffDto.prototype, "fechaContratacion", void 0);
class UpdateStaffDto {
}
exports.UpdateStaffDto = UpdateStaffDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateStaffDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "posicion", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateStaffDto.prototype, "fechaContratacion", void 0);
class StaffDto {
}
exports.StaffDto = StaffDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StaffDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], StaffDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StaffDto.prototype, "posicion", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], StaffDto.prototype, "fechaContratacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => personal_proyecto_dto_1.PersonalProyectoDto),
    __metadata("design:type", Array)
], StaffDto.prototype, "personalProyectos", void 0);
//# sourceMappingURL=staff.dto.js.map