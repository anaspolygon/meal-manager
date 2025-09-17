import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // throw error if non-whitelisted properties are present
      transform: true, // automatically transform payloads to be objects typed according to their DTO classes
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
