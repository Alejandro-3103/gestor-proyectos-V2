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
exports.PersonalProyectoService = void 0;
const common_1 = require("@nestjs/common");
let PersonalProyectoService = class PersonalProyectoService {
    constructor(personalProyectoRepository) {
        this.personalProyectoRepository = personalProyectoRepository;
    }
    async create(createPersonalProyectoDto) {
        return this.personalProyectoRepository.create(createPersonalProyectoDto);
    }
    async findAll() {
        return this.personalProyectoRepository.findAll();
    }
    async findOne(id) {
        const personalProyecto = await this.personalProyectoRepository.findOne(id);
        if (!personalProyecto) {
            throw new common_1.NotFoundException(`PersonalProyecto with ID ${id} not found`);
        }
        return personalProyecto;
    }
    async update(id, updatePersonalProyectoDto) {
        await this.findOne(id);
        return this.personalProyectoRepository.update(id, updatePersonalProyectoDto);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        if (entity) {
            await this.personalProyectoRepository.remove(entity);
        }
    }
};
exports.PersonalProyectoService = PersonalProyectoService;
exports.PersonalProyectoService = PersonalProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PersonalProyectoRepositoryInterface')),
    __metadata("design:paramtypes", [Object])
], PersonalProyectoService);
//# sourceMappingURL=personal-proyecto.service.js.map