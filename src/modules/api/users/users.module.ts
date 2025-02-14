import { HashService } from '@/common/services/hash.service';
import { Module } from '@nestjs/common';
import { UserRepository } from '../../../database/repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DrizzleModule } from '@/common/modules/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UserRepository, UsersService, HashService],
})
export class UsersModule {}
