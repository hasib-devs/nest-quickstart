import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigModule from './common/modules/config.module';
import BlogModule from './modules/blog/blog.module';
import CoreModule from './modules/core/core.module';
import { MediaModule } from './modules/media/media.module';

@Module({
  imports: [CoreModule, BlogModule, MediaModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
