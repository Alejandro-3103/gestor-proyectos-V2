import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.use(cookieParser());
  
  app.enableCors({
    origin: ['http://localhost:3001', 'http://frontend:3000', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(4000, '0.0.0.0');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
