import { IsString, IsEmail, IsOptional, IsDate, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ClienteProyectoDto } from 'src/modules/cliente-proyecto/application/dtos/cliente-proyecto.dto';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correoElectronico: string;

  @IsString()
  empresa: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fechaRegistro?: Date;
}

export class UpdateClienteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correoElectronico: string;

  @IsString()
  empresa: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fechaRegistro?: Date;
}

export class ClienteDto {
    nombre: string;
    correoElectronico: string;
    empresa: string;
    fechaRegistro?: Date;
    @IsOptional()
    @IsArray()
    @Type(() => ClienteProyectoDto)
    clienteProyectoDto?: ClienteProyectoDto[];
}