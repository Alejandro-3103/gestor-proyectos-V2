"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const proyecto_entity_1 = require("./domain/entities/proyecto.entity");
const proyecto_service_1 = require("./application/proyecto.service");
const proyecto_controller_1 = require("./infraestructure/controllers/proyecto.controller");
const typeorm_proyecto_repository_1 = require("./infraestructure/persistence/typeorm-proyecto.repository");
const personal_proyecto_module_1 = require("../personal-proyecto/personal-proyecto.module");
const cliente_proyecto_module_1 = require("../cliente-proyecto/cliente-proyecto.module");
let ProyectosModule = class ProyectosModule {
};
exports.ProyectosModule = ProyectosModule;
exports.ProyectosModule = ProyectosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([proyecto_entity_1.Proyecto]),
            personal_proyecto_module_1.PersonalProyectoModule,
            cliente_proyecto_module_1.ClienteProyectoModule,
        ],
        controllers: [proyecto_controller_1.ProyectoController],
        providers: [
            proyecto_service_1.ProyectoService,
            {
                provide: 'IProyectoRepository',
                useClass: typeorm_proyecto_repository_1.TypeOrmProyectoRepository,
            },
        ],
        exports: ['IProyectoRepository', proyecto_service_1.ProyectoService],
    })
], ProyectosModule);
//# sourceMappingURL=proyectos.module.js.map