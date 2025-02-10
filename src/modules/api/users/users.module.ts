import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from '../../../common/repositories/users.repository';
import { DrizzleModule } from '@/common/modules/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
})
export class UsersModule {}
