"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalProyectoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const personal_proyecto_entity_1 = require("./domain/entities/personal-proyecto.entity");
const personal_proyecto_service_1 = require("./application/personal-proyecto.service");
const personal_proyecto_repository_1 = require("./infraestructure/persistence/personal-proyecto.repository");
let PersonalProyectoModule = class PersonalProyectoModule {
};
exports.PersonalProyectoModule = PersonalProyectoModule;
exports.PersonalProyectoModule = PersonalProyectoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([personal_proyecto_entity_1.PersonalProyecto])],
        providers: [
            personal_proyecto_service_1.PersonalProyectoService,
            {
                provide: 'PersonalProyectoRepositoryInterface',
                useClass: personal_proyecto_repository_1.PersonalProyectoRepository,
            },
        ],
        exports: ['PersonalProyectoRepositoryInterface'],
    })
], PersonalProyectoModule);
//# sourceMappingURL=personal-proyecto.module.js.map