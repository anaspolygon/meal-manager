import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

  app.enableCors({
    origin: 'http://localhost:3001', // your Next.js app
    credentials: true, // if you use cookies/auth headers
  });
  const config = new DocumentBuilder()
    .setTitle('Meal Manager')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
