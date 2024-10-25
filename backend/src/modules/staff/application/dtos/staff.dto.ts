import { Type } from 'class-transformer';
import { IsString, IsEmail, IsDate, IsNumber, IsOptional, IsArray } from 'class-validator';
import { PersonalProyectoDto } from '../../../personal-proyecto/application/dtos/personal-proyecto.dto';

export class CreateStaffDto {
  @IsNumber()
  id: number;

  @IsString()
  nombre: string;

  @IsEmail()
  correoElectronico: string;

  @IsString()
  contraseña: string;

  @IsString()
  posicion: string;

  @IsDate()
  fechaContratacion: Date;
}

export class UpdateStaffDto {
  @IsNumber()
  id: number;

  @IsString()
  nombre?: string;

  @IsEmail()
  correoElectronico?: string;

  @IsString()
  contraseña?: string;

  @IsString()
  posicion?: string;

  @IsDate()
  fechaContratacion?: Date;
}
 
  export class StaffDto {
    @IsNumber()
    id: number;
  
    @IsString()
    nombre: string;
  
    @IsEmail()
    correoElectronico: string;

    @IsString()
    contraseña: string;
  
    @IsString()
    posicion: string;
  
    @IsDate()
    fechaContratacion: Date;
    
    @IsOptional()
    @IsArray()
    @Type(() => PersonalProyectoDto)
    personalProyectos?: PersonalProyectoDto[];
  }