import { HashService } from '@/common/services/hash.service';
import { IsEmailUniqueConstraint } from '@/common/validators/is-email-unique.validator';
import { UserRepository } from '@/database/repositories/users.repository';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DrizzleModule } from '@/common/modules/drizzle.module';

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
    IsEmailUniqueConstraint,
  ],
})
export class AuthModule {}
