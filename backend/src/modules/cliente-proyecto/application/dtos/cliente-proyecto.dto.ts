import { IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ClienteDto } from 'src/modules/cliente/application/dtos/cliente.dto';
import { CreateProyectoDto } from 'src/modules/proyectos/application/dtos/proyecto.dto';

export class CreateClienteProyectoDto {
  @IsNumber()
  clienteId: number;

  @IsNumber()
  proyectoId: number;

  cliente?: ClienteDto;
  proyecto?: CreateProyectoDto;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion: Date;
}

export class UpdateClienteProyectoDto {
  @IsNumber()
  clienteId?: number;

  @IsNumber()
  proyectoId?: number;

  cliente?: ClienteDto;
  proyecto?: CreateProyectoDto;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion?: Date;
}

export class ClienteProyectoDto {
  id: number;
  clienteId: number;
  proyectoId: number;
  fechaAsignacion: Date;
  cliente?: ClienteDto;
  proyecto?: CreateProyectoDto;
}
