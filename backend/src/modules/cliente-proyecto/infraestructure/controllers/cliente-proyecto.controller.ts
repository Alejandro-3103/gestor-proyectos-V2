import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ClienteProyectoService } from '../../application/cliente-proyecto.service';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';

@Controller('cliente-proyecto')
export class ClienteProyectoController {
  constructor(private readonly clienteProyectoService: ClienteProyectoService) {}

  @Post()
  create(@Body() createClienteProyectoDto: CreateClienteProyectoDto) {
    return this.clienteProyectoService.create(createClienteProyectoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteProyectoService.findOne(+id);
  }

  @Get('proyecto/:proyectoId')
  findAllForProyecto(@Param('proyectoId') proyectoId: string) {
    return this.clienteProyectoService.findAllForProyecto(+proyectoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteProyectoDto: UpdateClienteProyectoDto) {
    return this.clienteProyectoService.update(+id, updateClienteProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteProyectoService.remove(+id);
  }
}