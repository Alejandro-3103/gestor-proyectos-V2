import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './domain/entities/cliente.entity';
import { ClienteService } from './application/cliente.service';
import { ClienteController } from './infraestructure/controllers/cliente.controller';
import { ClienteRepository } from './infraestructure/persistence/cliente.repository';
import { ClienteProyectoRepository } from '../cliente-proyecto/infraestructure/persistence/cliente-proyecto.repository';
import { ClienteProyecto } from '../cliente-proyecto/domain/entities/cliente-proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ClienteProyecto])],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    {
      provide: 'ClienteRepositoryInterface',
      useClass: ClienteRepository,
    },
    {
      provide: 'ClienteProyectoRepositoryInterface',
      useClass: ClienteProyectoRepository,
    },
  ],
  exports: ['ClienteRepositoryInterface', ClienteService],
})
export class ClienteModule {}