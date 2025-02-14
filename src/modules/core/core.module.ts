import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}

export default CoreModule;
