import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ApiModule from './modules/api/api.module';
import WebModule from './modules/web/web.module';
import ConfigModule from './common/modules/config.module';
import { DrizzleModule } from './common/modules/drizzle.module';

@Module({
  imports: [ApiModule, WebModule, ConfigModule, DrizzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
