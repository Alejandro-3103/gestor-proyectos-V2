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
exports.ClienteRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("../../domain/entities/cliente.entity");
let ClienteRepository = class ClienteRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createClienteDto) {
        const cliente = this.repository.create(createClienteDto);
        return this.repository.save(cliente);
    }
    async findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateClienteDto) {
        await this.repository.update(id, updateClienteDto);
        return this.findOne(id);
    }
    async delete(criteria) {
        return this.repository.delete(criteria);
    }
    async remove(cliente) {
        return this.repository.remove(cliente);
    }
};
exports.ClienteRepository = ClienteRepository;
exports.ClienteRepository = ClienteRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClienteRepository);
//# sourceMappingURL=cliente.repository.js.map