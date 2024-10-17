import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PersonalProyectoService } from '../../application/personal-proyecto.service';
import { CreatePersonalProyectoDto, UpdatePersonalProyectoDto } from '../../application/dtos/personal-proyecto.dto';

@Controller('personal-proyecto')
export class PersonalProyectoController {
  constructor(private readonly personalProyectoService: PersonalProyectoService) {}

  @Post()
  create(@Body() createPersonalProyectoDto: CreatePersonalProyectoDto) {
    return this.personalProyectoService.create(createPersonalProyectoDto);
  }

  @Get()
  findAll() {
    return this.personalProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalProyectoService.findOne(+id);
  }
  
  @Get('personal/:proyectoId')
  async getPersonalForProyecto(@Param('proyectoId') proyectoId: string) {
    console.log(`Recibida solicitud para proyecto ID: ${proyectoId}`);
    return this.personalProyectoService.findAllForProyecto(+proyectoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalProyectoDto: UpdatePersonalProyectoDto) {
    return this.personalProyectoService.update(+id, updatePersonalProyectoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.personalProyectoService.remove(+id);
    return { message: 'Staff removed successfully' };
  }
}