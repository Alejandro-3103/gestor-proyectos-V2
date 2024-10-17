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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
let ClienteService = class ClienteService {
    constructor(clienteRepository, clienteProyectoRepository) {
        this.clienteRepository = clienteRepository;
        this.clienteProyectoRepository = clienteProyectoRepository;
    }
    async create(createClienteDto) {
        return this.clienteRepository.create(createClienteDto);
    }
    async findAll() {
        return this.clienteRepository.findAll();
    }
    async findOne(id) {
        const cliente = await this.clienteRepository.findOne(id);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente with ID ${id} not found`);
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        await this.findOne(id);
        return this.clienteRepository.update(id, updateClienteDto);
    }
    async delete(id) {
        await this.clienteRepository.delete(id);
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ClienteRepositoryInterface')),
    __param(1, (0, common_1.Inject)('ClienteProyectoRepositoryInterface')),
    __metadata("design:paramtypes", [Object, Object])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map