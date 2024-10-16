import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './domain/entities/staff.entity';
import { StaffService } from './application/staff.service';
import { StaffController } from './infraestructrure/controllers/staff.controller';
import { TypeOrmStaffRepository } from './infraestructrure/persistence/typeorm-staff.repository';
import { PersonalProyectoRepository } from '../personal-proyecto/infraestructure/persistence/personal-proyecto.repository';
import { PersonalProyecto } from '../personal-proyecto/domain/entities/personal-proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff, PersonalProyecto])],
  controllers: [StaffController],
  providers: [
    StaffService,
    {
      provide: 'StaffRepositoryInterface',
      useClass: TypeOrmStaffRepository,
    },
    {
      provide: 'PersonalProyectoRepositoryInterface',
      useClass: PersonalProyectoRepository,
    },
  ],
  exports: [StaffService],
})
export class StaffModule {}