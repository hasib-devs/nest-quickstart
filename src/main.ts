import { APP_PORT } from '@/common/utils/constants';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationExceptionFactory } from './common/pipes/validation-exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      errorHttpStatusCode: 422,
      whitelist: true,
      exceptionFactory: validationExceptionFactory,
    }),
  );
  await app.listen(APP_PORT, () => {
    console.log(`Server running on http://localhost:${APP_PORT}`);
  });
}

bootstrap();
