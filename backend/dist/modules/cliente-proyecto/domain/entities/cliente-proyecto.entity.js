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
exports.ClienteProyecto = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../../../cliente/domain/entities/cliente.entity");
const proyecto_entity_1 = require("../../../proyectos/domain/entities/proyecto.entity");
let ClienteProyecto = class ClienteProyecto {
};
exports.ClienteProyecto = ClienteProyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClienteProyecto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, cliente => cliente.clienteProyectos),
    (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
    __metadata("design:type", cliente_entity_1.Cliente)
], ClienteProyecto.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proyecto_entity_1.Proyecto, proyecto => proyecto.clienteProyectos),
    (0, typeorm_1.JoinColumn)({ name: 'proyecto_id' }),
    __metadata("design:type", proyecto_entity_1.Proyecto)
], ClienteProyecto.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_asignacion' }),
    __metadata("design:type", Date)
], ClienteProyecto.prototype, "fechaAsignacion", void 0);
exports.ClienteProyecto = ClienteProyecto = __decorate([
    (0, typeorm_1.Entity)('cliente_proyecto')
], ClienteProyecto);
//# sourceMappingURL=cliente-proyecto.entity.js.map