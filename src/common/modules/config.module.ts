import { Module } from '@nestjs/common';
import { ConfigModule as NestConfig } from '@nestjs/config';
import { validateEnv } from '../validators/env.validator';
import { MikroOrmModule } from '@mikro-orm/nestjs';
@Module({
  imports: [
    NestConfig.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    MikroOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
class ConfigModule {}

export default ConfigModule;
