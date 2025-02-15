import { HashService } from '@/common/services/hash.service';
import { IsEmailUniqueConstraint } from '@/common/validators/is-email-unique.validator';
import { UserRepository } from '@/modules/core/user/user.repository';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DrizzleModule } from '@/common/modules/drizzle.module';
import ConfigModule from '@/common/modules/config.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DrizzleModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION', '1d'),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    HashService,
    UserRepository,
    AuthModule,
    IsEmailUniqueConstraint,
  ],
})
export class AuthModule {}
