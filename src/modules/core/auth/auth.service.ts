import { User } from '@/database/schemas';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { HashService } from '@/common/services/hash.service';
import { SigninDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly hashService: HashService,
  ) {}
  async validateUser(signinDto: SigninDto): Promise<User | null> {
    try {
      const user = await this.userService.findByEmail(signinDto.email);
      if (
        user &&
        (await this.hashService.compareHash(signinDto.password, user.password))
      ) {
        return user;
      }

      return null;
    } catch (error) {
      console.log(`AuthService -> validateUser -> error`, error);
      return null;
    }
  }
  generateToken({ id, roles }: { id: number; roles: string }) {
    const payload = {
      sub: id,
      roles,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: 'super-secret',
        expiresIn: '1h',
      }),
      refresh_token: this.jwtService.sign(payload, {
        secret: 'super-secret',
        expiresIn: '7d',
      }),
    };
  }

  verifyToken(token: string) {
    return this.jwtService.verify<User>(token);
  }
}
