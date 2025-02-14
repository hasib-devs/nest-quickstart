import { BlogsModule } from '@/modules/api/blogs/blogs.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [BlogsModule],
  controllers: [],
  providers: [],
})
class ApiModule {}

export default ApiModule;
