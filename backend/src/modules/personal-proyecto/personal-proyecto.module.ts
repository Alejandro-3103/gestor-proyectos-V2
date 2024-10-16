import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalProyecto } from './domain/entities/personal-proyecto.entity';
import { PersonalProyectoService } from './application/personal-proyecto.service';
import { PersonalProyectoRepository } from './infraestructure/persistence/personal-proyecto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalProyecto])],
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