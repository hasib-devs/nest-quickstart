import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.APP_PORT ?? 3300;
  console.log(`Server running on http://localhost:${port}`);

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap();
