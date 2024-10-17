import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalProyecto } from './domain/entities/personal-proyecto.entity';
import { PersonalProyectoService } from './application/personal-proyecto.service';
import { PersonalProyectoRepository } from './infraestructure/persistence/personal-proyecto.repository';
import { StaffModule } from '../staff/staff.module';
import { ProyectosModule } from '../proyectos/proyectos.module';
import { PersonalProyectoController } from './infraestructure/controllers/personal-proyecto.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonalProyecto]),
    StaffModule,
    forwardRef(() => ProyectosModule),
  ],
  controllers: [PersonalProyectoController],
  providers: [
    PersonalProyectoService,
    {
      provide: 'PersonalProyectoRepositoryInterface',
      useClass: PersonalProyectoRepository,
    },
  ],
  exports: ['PersonalProyectoRepositoryInterface'],
})
export class PersonalProyectoModule {}