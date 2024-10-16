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
exports.PersonalProyecto = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("../../../staff/domain/entities/staff.entity");
const proyecto_entity_1 = require("../../../proyectos/domain/entities/proyecto.entity");
let PersonalProyecto = class PersonalProyecto {
};
exports.PersonalProyecto = PersonalProyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PersonalProyecto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, staff => staff.personalProyectos, { onDelete: 'CASCADE' }),
    __metadata("design:type", staff_entity_1.Staff)
], PersonalProyecto.prototype, "personal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, proyecto => proyecto.personalProyectos, { onDelete: 'CASCADE' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], PersonalProyecto.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_asignacion' }),
    __metadata("design:type", Date)
], PersonalProyecto.prototype, "fechaAsignacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PersonalProyecto.prototype, "rol", void 0);
exports.PersonalProyecto = PersonalProyecto = __decorate([
    (0, typeorm_1.Entity)('personal_proyecto')
], PersonalProyecto);
//# sourceMappingURL=personal-proyecto.entity.js.map