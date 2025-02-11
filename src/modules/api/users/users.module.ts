import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from '../../../database/repositories/users.repository';
import { DrizzleModule } from '@/common/modules/drizzle.module';
import { HashService } from '@/common/services/hash.service';

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UserRepository, UsersService, HashService],
})
export class UsersModule {}
