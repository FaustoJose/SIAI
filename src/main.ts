import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar opciones CORS
  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3001'], // Especificar los orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Especificar todos los métodos HTTP permitidos
    credentials: true // Permitir credenciales (cookies, encabezados de autenticación, etc.)
  };

  // Habilitar CORS
  app.enableCors(corsOptions);
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  await app.listen(3000); 
}
bootstrap();