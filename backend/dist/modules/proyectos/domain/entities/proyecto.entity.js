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
exports.Proyecto = void 0;
const typeorm_1 = require("typeorm");
const personal_proyecto_entity_1 = require("../../../personal-proyecto/domain/entities/personal-proyecto.entity");
const cliente_proyecto_entity_1 = require("../../../cliente-proyecto/domain/entities/cliente-proyecto.entity");
let Proyecto = class Proyecto {
};
exports.Proyecto = Proyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Proyecto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Proyecto.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Proyecto.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cliente_proyecto_entity_1.ClienteProyecto, clienteProyecto => clienteProyecto.proyecto, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Proyecto.prototype, "clienteProyectos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => personal_proyecto_entity_1.PersonalProyecto, personalProyecto => personalProyecto.proyecto, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Proyecto.prototype, "personalProyectos", void 0);
exports.Proyecto = Proyecto = __decorate([
    (0, typeorm_1.Entity)()
], Proyecto);
//# sourceMappingURL=proyecto.entity.js.map