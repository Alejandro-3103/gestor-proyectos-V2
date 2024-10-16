import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':proyectoId')
  findOne(@Param('id') id: string) {
    return this.personalProyectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalProyectoDto: UpdatePersonalProyectoDto) {
    return this.personalProyectoService.update(+id, updatePersonalProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalProyectoService.remove(+id);
  }
}