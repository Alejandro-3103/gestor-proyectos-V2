import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteProyecto } from './domain/entities/cliente-proyecto.entity';
import { ClienteProyectoService } from './application/cliente-proyecto.service';
import { ClienteProyectoRepository } from './infraestructure/persistence/cliente-proyecto.repository';
import { ClienteModule } from '../cliente/cliente.module';
import { ProyectosModule } from '../proyectos/proyectos.module';
import { ClienteProyectoController } from './infraestructure/controllers/cliente-proyecto.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteProyecto]),
    ClienteModule,
    forwardRef(() => ProyectosModule),
  ],
  controllers: [ClienteProyectoController], // Añade esta línea
  providers: [
    ClienteProyectoService,
    {
      provide: 'ClienteProyectoRepositoryInterface',
      useClass: ClienteProyectoRepository,
    },
  ],
  exports: ['ClienteProyectoRepositoryInterface', ClienteProyectoService],
})
export class ClienteProyectoModule {}