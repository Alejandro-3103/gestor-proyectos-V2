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
exports.ProyectoController = void 0;
const common_1 = require("@nestjs/common");
const proyecto_service_1 = require("../../application/proyecto.service");
const proyecto_dto_1 = require("../../application/dtos/proyecto.dto");
let ProyectoController = class ProyectoController {
    constructor(proyectoService) {
        this.proyectoService = proyectoService;
    }
    async findAll() {
        return this.proyectoService.findAll();
    }
    async findById(id) {
        const proyecto = await this.proyectoService.findById(id);
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
        }
        return proyecto;
    }
    async create(createProyectoDto) {
        return this.proyectoService.create(createProyectoDto);
    }
    async update(id, updateProyectoDto) {
        return this.proyectoService.update(id, updateProyectoDto);
    }
    async delete(id) {
        await this.proyectoService.delete(id);
        return { message: 'Proyecto eliminado con éxito' };
    }
    async getPersonalProyecto(id) {
        return this.proyectoService.getPersonalProyecto(+id);
    }
    async getClientesProyecto(id) {
        return this.proyectoService.getClientesProyecto(+id);
    }
};
exports.ProyectoController = ProyectoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proyecto_dto_1.CreateProyectoDto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, proyecto_dto_1.UpdateProyectoDto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/personal'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "getPersonalProyecto", null);
__decorate([
    (0, common_1.Get)(':id/clientes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "getClientesProyecto", null);
exports.ProyectoController = ProyectoController = __decorate([
    (0, common_1.Controller)('proyectos'),
    __metadata("design:paramtypes", [proyecto_service_1.ProyectoService])
], ProyectoController);
//# sourceMappingURL=proyecto.controller.js.map