import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from '@/common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT, () => {
    console.log(`Server running on http://localhost:${APP_PORT}`);
  });
}

bootstrap();
