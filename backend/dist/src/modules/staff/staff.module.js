"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const staff_entity_1 = require("./domain/entities/staff.entity");
const staff_service_1 = require("./application/staff.service");
const staff_controller_1 = require("./infraestructrure/controllers/staff.controller");
const typeorm_staff_repository_1 = require("./infraestructrure/persistence/typeorm-staff.repository");
const personal_proyecto_repository_1 = require("../personal-proyecto/infraestructure/persistence/personal-proyecto.repository");
const personal_proyecto_entity_1 = require("../personal-proyecto/domain/entities/personal-proyecto.entity");
let StaffModule = class StaffModule {
};
exports.StaffModule = StaffModule;
exports.StaffModule = StaffModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([staff_entity_1.Staff, personal_proyecto_entity_1.PersonalProyecto])],
        controllers: [staff_controller_1.StaffController],
        providers: [
            staff_service_1.StaffService,
            {
                provide: 'StaffRepositoryInterface',
                useClass: typeorm_staff_repository_1.TypeOrmStaffRepository,
            },
            {
                provide: 'PersonalProyectoRepositoryInterface',
                useClass: personal_proyecto_repository_1.PersonalProyectoRepository,
            },
        ],
        exports: [staff_service_1.StaffService],
    })
], StaffModule);
//# sourceMappingURL=staff.module.js.map