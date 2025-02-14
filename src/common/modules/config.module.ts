import envConfig from '@/config/env.config';
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfig } from '@nestjs/config';
@Module({
  imports: [
    NestConfig.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
class ConfigModule {}

export default ConfigModule;
