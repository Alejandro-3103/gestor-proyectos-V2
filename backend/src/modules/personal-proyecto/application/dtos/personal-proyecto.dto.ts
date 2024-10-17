import { IsNumber, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { StaffDto } from 'src/modules/staff/application/dtos/staff.dto';
import { CreateProyectoDto } from 'src/modules/proyectos/application/dtos/proyecto.dto';

export class CreatePersonalProyectoDto {
  @IsNumber()
  personalId: number;

  @IsNumber()
  proyectoId: number;

  personal?: StaffDto;
  proyecto?: CreateProyectoDto;

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

  personal?: StaffDto;
  proyecto?: CreateProyectoDto;

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
  personal?: StaffDto;
  proyecto?: CreateProyectoDto;
}