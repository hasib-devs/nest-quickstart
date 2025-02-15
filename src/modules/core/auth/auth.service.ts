import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import { HashService } from '@/common/services/hash.service';
import { SigninDto } from './dto/auth.dto';
import { User } from '../user/users.schema';

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
        (await this.hashService.compareHash(user.password, signinDto.password))
      ) {
        return user;
      }

      return null;
    } catch (error) {
      console.error(`AuthService -> validateUser -> error`, error);
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
