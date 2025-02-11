import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { HashService } from '@/common/services/hash.service';
import { UserRepository } from '@/database/repositories/users.repository';
import { DrizzleModule } from '@/common/modules/drizzle.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DrizzleModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    HashService,
    UserRepository,
    AuthModule,
    JwtService,
  ],
})
export class AuthModule {}
