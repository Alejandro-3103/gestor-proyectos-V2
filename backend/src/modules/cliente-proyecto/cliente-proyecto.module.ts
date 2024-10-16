import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteProyecto } from './domain/entities/cliente-proyecto.entity';
import { ClienteProyectoService } from './application/cliente-proyecto.service';
import { ClienteProyectoRepository } from './infraestructure/persistence/cliente-proyecto.repository';
import { ClienteModule } from '../cliente/cliente.module';
import { ProyectosModule } from '../proyectos/proyectos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteProyecto]),
    ClienteModule,
    forwardRef(() => ProyectosModule),
  ],
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