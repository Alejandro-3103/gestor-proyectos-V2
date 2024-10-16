import { IsString, IsDateString, IsOptional, IsArray, ValidateNested, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsDateString()
  fechaInicio: Date;

  @IsOptional()
  @IsDateString()
  fechaFin?: Date;

  @IsString()
  estado: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePersonalProyectoDto)
  personalProyectos?: CreatePersonalProyectoDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClienteProyectoDto)
  clienteProyectos?: CreateClienteProyectoDto[];
}

export class UpdateProyectoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fechaInicio?: Date;

  @IsOptional()
  @IsDateString()
  fechaFin?: Date;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePersonalProyectoDto)
  personalProyectos?: CreatePersonalProyectoDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClienteProyectoDto)
  clienteProyectos?: CreateClienteProyectoDto[];
}

export class CreateClienteProyectoDto {
  @IsNumber()
  clienteId: number;

  @IsNumber()
  proyectoId: number;

  @IsDate()
  @Type(() => Date)
  fechaAsignacion: Date;
}

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