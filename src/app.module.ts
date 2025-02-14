import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigModule from './common/modules/config.module';
import ApiModule from './modules/api/api.module';
import CoreModule from './modules/core/core.module';
import WebModule from './modules/web/web.module';

@Module({
  imports: [CoreModule, ApiModule, WebModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
