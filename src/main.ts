import { APP_PORT } from '@/common/utils/constants';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationExceptionFactory } from './common/pipes/validation-exception';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Tell class-validator to use NestJS container
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      errorHttpStatusCode: 422,
      whitelist: true,
      stopAtFirstError: true,
      exceptionFactory: validationExceptionFactory,
    }),
  );
  await app.listen(APP_PORT, () => {
    console.log(`Server running on http://localhost:${APP_PORT}`);
  });
}

bootstrap();
