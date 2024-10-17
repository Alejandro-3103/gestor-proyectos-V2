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
exports.PersonalProyectoController = void 0;
const common_1 = require("@nestjs/common");
const personal_proyecto_service_1 = require("../../application/personal-proyecto.service");
const personal_proyecto_dto_1 = require("../../application/dtos/personal-proyecto.dto");
let PersonalProyectoController = class PersonalProyectoController {
    constructor(personalProyectoService) {
        this.personalProyectoService = personalProyectoService;
    }
    create(createPersonalProyectoDto) {
        return this.personalProyectoService.create(createPersonalProyectoDto);
    }
    findAll() {
        return this.personalProyectoService.findAll();
    }
    findOne(id) {
        return this.personalProyectoService.findOne(+id);
    }
    update(id, updatePersonalProyectoDto) {
        return this.personalProyectoService.update(+id, updatePersonalProyectoDto);
    }
    remove(id) {
        return this.personalProyectoService.remove(+id);
    }
};
exports.PersonalProyectoController = PersonalProyectoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personal_proyecto_dto_1.CreatePersonalProyectoDto]),
    __metadata("design:returntype", void 0)
], PersonalProyectoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonalProyectoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':proyectoId'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonalProyectoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, personal_proyecto_dto_1.UpdatePersonalProyectoDto]),
    __metadata("design:returntype", void 0)
], PersonalProyectoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonalProyectoController.prototype, "remove", null);
exports.PersonalProyectoController = PersonalProyectoController = __decorate([
    (0, common_1.Controller)('personal-proyecto'),
    __metadata("design:paramtypes", [personal_proyecto_service_1.PersonalProyectoService])
], PersonalProyectoController);
//# sourceMappingURL=personal-proyecto.controller.js.map