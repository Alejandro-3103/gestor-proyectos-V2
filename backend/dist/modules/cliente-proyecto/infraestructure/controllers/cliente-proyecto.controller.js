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
exports.ClienteProyectoController = void 0;
const common_1 = require("@nestjs/common");
const cliente_proyecto_service_1 = require("../../application/cliente-proyecto.service");
const cliente_proyecto_dto_1 = require("../../application/dtos/cliente-proyecto.dto");
let ClienteProyectoController = class ClienteProyectoController {
    constructor(clienteProyectoService) {
        this.clienteProyectoService = clienteProyectoService;
    }
    create(createClienteProyectoDto) {
        return this.clienteProyectoService.create(createClienteProyectoDto);
    }
    findAll() {
        return this.clienteProyectoService.findAll();
    }
    findOne(id) {
        return this.clienteProyectoService.findOne(+id);
    }
    async getClientesForProyecto(proyectoId) {
        console.log(`Recibida solicitud para proyecto ID: ${proyectoId}`);
        return this.clienteProyectoService.findAllForProyecto(+proyectoId);
    }
    update(id, updateClienteProyectoDto) {
        return this.clienteProyectoService.update(+id, updateClienteProyectoDto);
    }
    remove(id) {
        return this.clienteProyectoService.remove(+id);
    }
};
exports.ClienteProyectoController = ClienteProyectoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cliente_proyecto_dto_1.CreateClienteProyectoDto]),
    __metadata("design:returntype", void 0)
], ClienteProyectoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClienteProyectoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteProyectoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('proyecto/:proyectoId'),
    __param(0, (0, common_1.Param)('proyectoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteProyectoController.prototype, "getClientesForProyecto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cliente_proyecto_dto_1.UpdateClienteProyectoDto]),
    __metadata("design:returntype", void 0)
], ClienteProyectoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteProyectoController.prototype, "remove", null);
exports.ClienteProyectoController = ClienteProyectoController = __decorate([
    (0, common_1.Controller)('cliente-proyecto'),
    __metadata("design:paramtypes", [cliente_proyecto_service_1.ClienteProyectoService])
], ClienteProyectoController);
//# sourceMappingURL=cliente-proyecto.controller.js.map