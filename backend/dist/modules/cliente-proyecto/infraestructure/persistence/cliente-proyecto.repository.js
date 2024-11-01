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
exports.ClienteProyectoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cliente_proyecto_entity_1 = require("../../domain/entities/cliente-proyecto.entity");
let ClienteProyectoRepository = class ClienteProyectoRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createClienteProyectoDto) {
        const clienteProyecto = this.repository.create(createClienteProyectoDto);
        return this.repository.save(clienteProyecto);
    }
    async findAll() {
        return this.repository.find();
    }
    async findAllForProyecto(proyectoId) {
        return this.find({
            where: { proyecto: { id: proyectoId } },
            relations: ['cliente'],
        });
    }
    async findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateClienteProyectoDto) {
        await this.repository.update(id, updateClienteProyectoDto);
        return this.findOne(id);
    }
    async remove(clienteProyecto) {
        if (Array.isArray(clienteProyecto)) {
            return this.repository.remove(clienteProyecto);
        }
        else {
            return this.repository.remove(clienteProyecto);
        }
    }
    async delete(criteria) {
        return this.repository.delete(criteria);
    }
    async find(options) {
        return this.repository.find(options);
    }
    async save(clienteProyecto) {
        return this.repository.save(clienteProyecto);
    }
};
exports.ClienteProyectoRepository = ClienteProyectoRepository;
exports.ClienteProyectoRepository = ClienteProyectoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_proyecto_entity_1.ClienteProyecto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClienteProyectoRepository);
//# sourceMappingURL=cliente-proyecto.repository.js.map