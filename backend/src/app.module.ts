import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProyectosModule } from './modules/proyectos/proyectos.module';
import { StaffModule } from './modules/staff/staff.module';
import { PersonalProyectoModule } from './modules/personal-proyecto/personal-proyecto.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ClienteProyectoModule } from './modules/cliente-proyecto/cliente-proyecto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') !== 'production',
        logging: false,
      }),
      inject: [ConfigService],
    }),
    ProyectosModule,
    StaffModule,
    PersonalProyectoModule,
    ClienteModule, 
    ClienteProyectoModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
