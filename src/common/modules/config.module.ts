import { Module } from '@nestjs/common';
import { ConfigModule as NestConfig } from '@nestjs/config';
import { validateEnv } from '../validators/env.validator';
@Module({
  imports: [
    NestConfig.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  controllers: [],
  providers: [],
})
class ConfigModule {}

export default ConfigModule;
