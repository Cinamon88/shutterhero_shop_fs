import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './shared/services/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptors/logger';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(configService.get('port'));
  await app.listen(8000);
}
bootstrap();
