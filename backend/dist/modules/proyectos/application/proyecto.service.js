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
exports.ProyectoService = void 0;
const common_1 = require("@nestjs/common");
const proyecto_entity_1 = require("../domain/entities/proyecto.entity");
const personal_proyecto_entity_1 = require("../../personal-proyecto/domain/entities/personal-proyecto.entity");
const cliente_proyecto_entity_1 = require("../../cliente-proyecto/domain/entities/cliente-proyecto.entity");
let ProyectoService = class ProyectoService {
    constructor(proyectoRepository, personalProyectoRepository, clienteProyectoRepository) {
        this.proyectoRepository = proyectoRepository;
        this.personalProyectoRepository = personalProyectoRepository;
        this.clienteProyectoRepository = clienteProyectoRepository;
    }
    async findAll() {
        return this.proyectoRepository.find({
            relations: ['personalProyectos', 'clienteProyectos'],
        });
    }
    async findById(id) {
        const proyecto = await this.proyectoRepository.findOne({
            where: { id },
            relations: ['personalProyectos', 'clienteProyectos'],
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
        }
        return proyecto;
    }
    async create(createProyectoDto) {
        const proyecto = new proyecto_entity_1.Proyecto();
        Object.assign(proyecto, createProyectoDto);
        const savedProyecto = await this.proyectoRepository.save(proyecto);
        if (createProyectoDto.personalProyectos) {
            for (const pp of createProyectoDto.personalProyectos) {
                const personalProyecto = new personal_proyecto_entity_1.PersonalProyecto();
                personalProyecto.proyecto = savedProyecto;
                personalProyecto.personal = { id: pp.personalId };
                personalProyecto.rol = pp.rol;
                await this.personalProyectoRepository.save(personalProyecto);
            }
        }
        if (createProyectoDto.clienteProyectos) {
            for (const cp of createProyectoDto.clienteProyectos) {
                const clienteProyecto = new cliente_proyecto_entity_1.ClienteProyecto();
                clienteProyecto.proyecto = savedProyecto;
                clienteProyecto.cliente = { id: cp.clienteId };
                await this.clienteProyectoRepository.save(clienteProyecto);
            }
        }
        return this.findById(savedProyecto.id);
    }
    async update(id, updateProyectoDto) {
        const proyecto = await this.findById(id);
        Object.assign(proyecto, updateProyectoDto);
        await this.proyectoRepository.save(proyecto);
        if (updateProyectoDto.personalProyectos) {
            await this.personalProyectoRepository.delete({ proyecto: { id } });
            for (const pp of updateProyectoDto.personalProyectos) {
                const personalProyecto = new personal_proyecto_entity_1.PersonalProyecto();
                personalProyecto.proyecto = proyecto;
                personalProyecto.personal = { id: pp.personalId };
                personalProyecto.rol = pp.rol;
                await this.personalProyectoRepository.save(personalProyecto);
            }
        }
        if (updateProyectoDto.clienteProyectos) {
            await this.clienteProyectoRepository.delete({ proyecto: { id } });
            for (const cp of updateProyectoDto.clienteProyectos) {
                const clienteProyecto = new cliente_proyecto_entity_1.ClienteProyecto();
                clienteProyecto.proyecto = proyecto;
                clienteProyecto.cliente = { id: cp.clienteId };
                await this.clienteProyectoRepository.save(clienteProyecto);
            }
        }
        return this.findById(id);
    }
    async delete(id) {
        const proyecto = await this.proyectoRepository.findOne({
            where: { id },
            relations: ['personalProyectos', 'clienteProyectos'],
        });
        if (!proyecto) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
        if (proyecto.personalProyectos) {
            await this.personalProyectoRepository.remove(proyecto.personalProyectos);
        }
        if (proyecto.clienteProyectos) {
            await this.clienteProyectoRepository.remove(proyecto.clienteProyectos);
        }
        await this.proyectoRepository.remove(proyecto);
    }
    async getPersonalProyecto(id) {
        return this.personalProyectoRepository.find({
            where: { proyecto: { id } },
            relations: ['personal'],
        });
    }
    async getClientesProyecto(id) {
        return this.clienteProyectoRepository.find({
            where: { proyecto: { id } },
            relations: ['cliente'],
        });
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IProyectoRepository')),
    __param(1, (0, common_1.Inject)('PersonalProyectoRepositoryInterface')),
    __param(2, (0, common_1.Inject)('ClienteProyectoRepositoryInterface')),
    __metadata("design:paramtypes", [Object, Object, Object])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map