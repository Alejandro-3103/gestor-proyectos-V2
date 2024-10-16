import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './domain/entities/proyecto.entity';
import { ProyectoService } from './application/proyecto.service';
import { ProyectoController } from './infraestructure/controllers/proyecto.controller';
import { TypeOrmProyectoRepository } from './infraestructure/persistence/typeorm-proyecto.repository';
import { PersonalProyectoModule } from '../personal-proyecto/personal-proyecto.module';
import { ClienteProyectoModule } from '../cliente-proyecto/cliente-proyecto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proyecto]),
    PersonalProyectoModule,
    ClienteProyectoModule,
  ],
  controllers: [ProyectoController],
  providers: [
    ProyectoService,
    {
      provide: 'IProyectoRepository',
      useClass: TypeOrmProyectoRepository,
    },
  ],
  exports: ['IProyectoRepository', ProyectoService],
})
export class ProyectosModule {}