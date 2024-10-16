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
exports.Staff = void 0;
const typeorm_1 = require("typeorm");
const personal_proyecto_entity_1 = require("../../../personal-proyecto/domain/entities/personal-proyecto.entity");
let Staff = class Staff {
};
exports.Staff = Staff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Staff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Staff.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo_electronico' }),
    __metadata("design:type", String)
], Staff.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Staff.prototype, "posicion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_contratacion' }),
    __metadata("design:type", Date)
], Staff.prototype, "fechaContratacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => personal_proyecto_entity_1.PersonalProyecto, personalProyecto => personalProyecto.personal, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Staff.prototype, "personalProyectos", void 0);
exports.Staff = Staff = __decorate([
    (0, typeorm_1.Entity)()
], Staff);
//# sourceMappingURL=staff.entity.js.map