import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules/api/auth/auth.module';
import { BlogsModule } from '@/modules/api/blogs/blogs.module';
import { UsersModule } from '@/modules/api/users/users.module';
@Module({
  imports: [UsersModule, BlogsModule, AuthModule],
  controllers: [],
  providers: [],
})
class ApiModule {}

export default ApiModule;
