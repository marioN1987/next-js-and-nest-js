import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties not in DTO
      forbidNonWhitelisted: true, // throw error on extra properties
      transform: true, // automatically convert JSON to DTO instance
      errorHttpStatusCode: 400, // return 400 for validation errors
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
