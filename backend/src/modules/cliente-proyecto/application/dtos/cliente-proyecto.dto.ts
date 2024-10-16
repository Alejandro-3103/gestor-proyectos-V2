import { IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClienteProyectoDto {
  @IsNumber()
  clienteId: number;

  @IsNumber()
  proyectoId: number;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion: Date;
}

export class UpdateClienteProyectoDto {
  @IsNumber()
  clienteId?: number;

  @IsNumber()
  proyectoId?: number;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion?: Date;
}

export class ClienteProyectoDto {
  clienteId: number;
  proyectoId: number;
  fechaAsignacion: Date;
}