import { IsNumber, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePersonalProyectoDto {
  @IsNumber()
  personalId: number;

  @IsNumber()
  proyectoId: number;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion: Date;

  @IsString()
  rol: string;
}

export class UpdatePersonalProyectoDto {
  @IsNumber()
  personalId?: number;

  @IsNumber()
  proyectoId?: number;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion?: Date;

  @IsString()
  rol?: string;
}

export class PersonalProyectoDto {
  id: number;
  personalId: number;
  proyectoId: number;
  fechaAsignacion: Date;
  rol: string;
}