import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';
import { UsersService } from '../user/user.service';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from '../user/dto/user-response-dto';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('sign-in')
  async signin(@Body() signinDto: SigninDto) {
    const user = await this.authService.validateUser(signinDto);

    if (!user) {
      throw new UnprocessableEntityException({
        statusCode: 422,
        message: 'Invalid email or password',
      });
    }

    const token = this.authService.generateTokens(user);

    return {
      user: plainToInstance(UserResponseDto, user, {
        excludeExtraneousValues: true,
      }),
      ...token,
    };
  }

  @Post('sign-up')
  async signup(@Body() signupDto: SignupDto) {
    const data = await this.userService.create(signupDto);
    const token = this.authService.generateTokens(data);
    return {
      user: plainToInstance(UserResponseDto, data, {
        excludeExtraneousValues: true,
      }),
      ...token,
    };
  }
}
