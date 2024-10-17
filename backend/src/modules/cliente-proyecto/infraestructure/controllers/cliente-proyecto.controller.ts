import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, NotFoundException} from '@nestjs/common';
import { ClienteProyectoService } from '../../application/cliente-proyecto.service';
import { CreateClienteProyectoDto, UpdateClienteProyectoDto } from '../../application/dtos/cliente-proyecto.dto';

@Controller('cliente-proyecto')
export class ClienteProyectoController {
  constructor(private readonly clienteProyectoService: ClienteProyectoService) {}

  @Post()
  async create(@Body() createClienteProyectoDto: CreateClienteProyectoDto) {
    try {
      console.log('Received create request with DTO:', createClienteProyectoDto);
      const result = await this.clienteProyectoService.create(createClienteProyectoDto);
      console.log('Create operation result:', result);
      return result;
    } catch (error) {
      console.error('Error in create method:', error);
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Error creating cliente-proyecto: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @Get()
  findAll() {
    return this.clienteProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteProyectoService.findOne(+id);
  }

  @Get('proyecto/:proyectoId')
  async getClientesForProyecto(@Param('proyectoId') proyectoId: string) {
    console.log(`Recibida solicitud para proyecto ID: ${proyectoId}`);
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