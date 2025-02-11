import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;

    return {
      user: userData,
      ...token,
    };
  }

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = await this.userService.create(signupDto);
    const token = this.authService.generateToken(userData);
    return {
      user: userData,
      ...token,
    };
  }
}
