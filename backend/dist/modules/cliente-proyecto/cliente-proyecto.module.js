"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteProyectoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_proyecto_entity_1 = require("./domain/entities/cliente-proyecto.entity");
const cliente_proyecto_service_1 = require("./application/cliente-proyecto.service");
const cliente_proyecto_repository_1 = require("./infraestructure/persistence/cliente-proyecto.repository");
const cliente_module_1 = require("../cliente/cliente.module");
const proyectos_module_1 = require("../proyectos/proyectos.module");
const cliente_proyecto_controller_1 = require("./infraestructure/controllers/cliente-proyecto.controller");
let ClienteProyectoModule = class ClienteProyectoModule {
};
exports.ClienteProyectoModule = ClienteProyectoModule;
exports.ClienteProyectoModule = ClienteProyectoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cliente_proyecto_entity_1.ClienteProyecto]),
            cliente_module_1.ClienteModule,
            (0, common_1.forwardRef)(() => proyectos_module_1.ProyectosModule),
        ],
        controllers: [cliente_proyecto_controller_1.ClienteProyectoController],
        providers: [
            cliente_proyecto_service_1.ClienteProyectoService,
            {
                provide: 'ClienteProyectoRepositoryInterface',
                useClass: cliente_proyecto_repository_1.ClienteProyectoRepository,
            },
        ],
        exports: ['ClienteProyectoRepositoryInterface', cliente_proyecto_service_1.ClienteProyectoService],
    })
], ClienteProyectoModule);
//# sourceMappingURL=cliente-proyecto.module.js.map