import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from '../users/dto/user-response-dto';

@Controller('api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('signin')
  async signin(@Body() signinDto: SigninDto) {
    const user = await this.authService.validateUser(signinDto);

    if (!user) {
      throw new UnprocessableEntityException({
        statusCode: 422,
        message: 'Invalid email or password',
      });
    }

    const token = this.authService.generateToken(user);

    return {
      user: plainToInstance(UserResponseDto, user, {
        excludeExtraneousValues: true,
      }),
      ...token,
    };
  }

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await this.userService.create(signupDto);
    const token = this.authService.generateToken(data);
    return {
      user: plainToInstance(UserResponseDto, data, {
        excludeExtraneousValues: true,
      }),
      ...token,
    };
  }
}
