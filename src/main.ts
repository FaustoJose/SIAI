import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar opciones CORS
  const corsOptions: CorsOptions = {
    origin: '*' // Permitir solicitudes de cualquier origen, puedes ajustar esto según tus necesidades
    // También puedes configurar otros encabezados CORS según sea necesario
  };

  // Habilitar CORS
  app.enableCors(corsOptions);

  await app.listen(3000); 
}
bootstrap();