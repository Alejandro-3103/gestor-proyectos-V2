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
exports.ClienteProyectoService = void 0;
const common_1 = require("@nestjs/common");
let ClienteProyectoService = class ClienteProyectoService {
    constructor(clienteProyectoRepository, clienteRepository, proyectoRepository) {
        this.clienteProyectoRepository = clienteProyectoRepository;
        this.clienteRepository = clienteRepository;
        this.proyectoRepository = proyectoRepository;
    }
    async create(createClienteProyectoDto) {
        const { clienteId, proyectoId } = createClienteProyectoDto;
        const cliente = await this.clienteRepository.findOne(clienteId);
        const proyecto = await this.proyectoRepository.findOne(proyectoId);
        if (!cliente || !proyecto) {
            throw new common_1.NotFoundException('Cliente or Proyecto not found');
        }
        const clienteProyecto = await this.clienteProyectoRepository.create({
            clienteId: cliente.id,
            proyectoId: proyecto.id,
            fechaAsignacion: new Date(),
        });
        return await this.clienteProyectoRepository.save(clienteProyecto);
    }
    async findAll() {
        return this.clienteProyectoRepository.findAll();
    }
    async findOne(id) {
        const clienteProyecto = await this.clienteProyectoRepository.findOne({
            where: { id },
            relations: ['cliente', 'proyecto'],
        });
        if (!clienteProyecto) {
            throw new common_1.NotFoundException(`ClienteProyecto with ID ${id} not found`);
        }
        return clienteProyecto;
    }
    async update(id, updateClienteProyectoDto) {
        const clienteProyecto = await this.findOne(id);
        Object.assign(clienteProyecto, updateClienteProyectoDto);
        return await this.clienteProyectoRepository.save(clienteProyecto);
    }
    async remove(id) {
        const clienteProyecto = await this.clienteProyectoRepository.findOne({
            where: { id },
            relations: ['cliente', 'proyecto'],
        });
        if (!clienteProyecto) {
            throw new common_1.NotFoundException(`ClienteProyecto with ID ${id} not found`);
        }
        await this.clienteProyectoRepository.remove(clienteProyecto);
    }
    async findAllForProyecto(proyectoId) {
        return this.clienteProyectoRepository.findAllForProyecto(proyectoId);
    }
};
exports.ClienteProyectoService = ClienteProyectoService;
exports.ClienteProyectoService = ClienteProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ClienteProyectoRepositoryInterface')),
    __param(1, (0, common_1.Inject)('ClienteRepositoryInterface')),
    __param(2, (0, common_1.Inject)('IProyectoRepository')),
    __metadata("design:paramtypes", [Object, Object, Object])
], ClienteProyectoService);
//# sourceMappingURL=cliente-proyecto.service.js.map