import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ProyectoService } from '../../application/proyecto.service';
import { CreateProyectoDto, UpdateProyectoDto } from '../../application/dtos/proyecto.dto';

@Controller('proyectos')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Get()
  async findAll() {
    return this.proyectoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const proyecto = await this.proyectoService.findById(id);
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    }
    return proyecto;
  }

  @Post()
  async create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectoService.create(createProyectoDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProyectoDto: UpdateProyectoDto) {
    return this.proyectoService.update(id, updateProyectoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.proyectoService.delete(id);
    return { message: 'Proyecto eliminado con éxito' };
  }

  @Get(':id/personal')
  async getPersonalProyecto(@Param('id') id: string) {
    return this.proyectoService.getPersonalProyecto(+id);
  }
  
  @Get(':id/clientes')
  async getClientesProyecto(@Param('id') id: string) {
    return this.proyectoService.getClientesProyecto(+id);
  }
}