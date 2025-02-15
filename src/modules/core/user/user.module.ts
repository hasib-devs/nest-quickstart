import { HashService } from '@/common/services/hash.service';
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { DrizzleModule } from '@/common/modules/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [UserController],
  providers: [UserRepository, UsersService, HashService],
})
export class UsersModule {}
