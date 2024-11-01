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
exports.Cliente = void 0;
const cliente_proyecto_entity_1 = require("../../../cliente-proyecto/domain/entities/cliente-proyecto.entity");
const typeorm_1 = require("typeorm");
let Cliente = class Cliente {
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo_electronico' }),
    __metadata("design:type", String)
], Cliente.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "Empresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_registro', type: 'date', default: () => 'CURRENT_DATE' }),
    __metadata("design:type", Date)
], Cliente.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cliente_proyecto_entity_1.ClienteProyecto, clienteProyecto => clienteProyecto.cliente, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Cliente.prototype, "clienteProyectos", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)()
], Cliente);
//# sourceMappingURL=cliente.entity.js.map