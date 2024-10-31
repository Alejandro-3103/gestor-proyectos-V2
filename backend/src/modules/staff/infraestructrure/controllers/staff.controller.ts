import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, InternalServerErrorException, BadRequestException, ConflictException, Res, Req } from '@nestjs/common';
import { StaffService } from '../../application/staff.service';
import { CreateStaffDto, StaffDto, UpdateStaffDto } from '../../application/dtos/staff.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('staff')
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
    private configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }
  
  @Post('auth/login')
  async login(@Body() staffDto: StaffDto, @Res() res: Response) {
    // 1. Validaciones de correo y contraseña
    if (typeof staffDto.correoElectronico !== 'string') {
      throw new BadRequestException('correoElectronico debe ser un string');
    }
    if (staffDto.correoElectronico.length < 7) {
      throw new BadRequestException('correoElectronico debe tener al menos 7 caracteres');
    }

    if (typeof staffDto.contraseña !== 'string') {
      throw new BadRequestException('contraseña debe ser un string');
    }
    if (staffDto.contraseña.length < 7) {
      throw new BadRequestException('contraseña debe tener al menos 7 caracteres');
    }

    // 2. Comprobar si ya existe el correo
    const existingStaff = await this.staffService.findOne({
      where: { correoElectronico: staffDto.correoElectronico },
    });

    if (!existingStaff) {
      throw new ConflictException('El correo electrónico no existe');
    }

    // 3. Comparar la contraseña proporcionada con la hasheada
    const isValid = bcrypt.compareSync(staffDto.contraseña, existingStaff.contraseña);
    if (!isValid) {
      throw new ConflictException('La contraseña no es válida');
    }

    // 4. Generar el token JWT
    const secretKey = this.configService.get<string>('SECRET_JWT_KEY');
    const token = jwt.sign(
      { id: staffDto.id, correoElectronico: staffDto.correoElectronico }, 
      secretKey, 
      {
        expiresIn: '1h'
      });
    
    // 5. Establecer la cookie con el token
    res.cookie('access_token', token, {
      httpOnly: true, // Protege la cookie para que no pueda ser accedida desde JavaScript
      secure: this.configService.get('NODE_ENV') !== 'production', // La cookie solo se envía en HTTPS en producción
      sameSite: 'strict', // La cookie solo se puede acceder desde el mismo dominio
      maxAge: 1000 * 60 * 60, // Establece el tiempo de expiración de la cookie (1 hora)
    });

    const { contraseña, ...staffWithoutPassword } = existingStaff;
    
    // 6. Devolver el ID, correo electrónico y token
    return res.json({ 
      message: 'Inicio de sesión exitoso', 
      id: staffWithoutPassword.id, 
      correoElectronico: staffWithoutPassword.correoElectronico,
      token 
    });
  }

  @Get('auth/protected')
  async protected(@Req() req: Request, @Res() res: Response) {
  // Obtener el token de las cookies o del header Authorization
  const token = req.cookies.access_token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      // Si no hay token, devolver acceso no autorizado
      return res.status(401).json({ message: 'No hay token, Acceso no autorizado' });
    }

    try {
      // Verificar el token usando la clave secreta
      const data = jwt.verify(token, this.configService.get<string>('SECRET_JWT_KEY'));
      const { id, correoElectronico } = data as jwt.JwtPayload;

        // Devolver la respuesta con id y correo
        return res.status(200).json({ 
          message: 'Acceso permitido', 
          id, 
          correoElectronico 
        });
    } catch (error) {
      // Si hay un error (token inválido o expirado), devolver acceso no autorizado
      return res.status(401).json({ message: 'token inválido o expirado' });
    }
  }

  // Endpoint para cerrar sesión (Logout)
  @Post('auth/logout')
  async logout(@Res() res: Response) {
    // Eliminar la cookie de autenticación
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') !== 'production',
      sameSite: 'strict',
    });
     
    // Enviar una respuesta de éxito
    return res.json({ message: 'Sesión cerrada exitosamente' });   
  }

  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = Number(id);
    
    if (isNaN(numericId)) {
      throw new NotFoundException(`Invalid staff ID: ${id}`);
    }

    return this.staffService.findbyId(numericId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    // Validar que el ID es un número
    const staffId = +id; // Convertir a número
    if (isNaN(staffId)) {
      throw new BadRequestException('El ID debe ser un número');
    }

    // Intentar actualizar el staff
    const updatedStaff = await this.staffService.update(staffId, updateStaffDto);
    
    // Verificar si el usuario fue encontrado y actualizado
    if (!updatedStaff) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return updatedStaff;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.staffService.delete(+id);
      return { message: 'Staff member deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException('Error deleting staff member');
    }
  }
}