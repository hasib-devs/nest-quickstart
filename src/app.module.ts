import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './modules/media/media.module';
import ConfigModule from './common/modules/config.module';
import CoreModule from './modules/core/core.module';
import BlogModule from './modules/blog/blog.module';

@Module({
  imports: [CoreModule, BlogModule, MediaModule, ConfigModule, MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
