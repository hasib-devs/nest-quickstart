import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto/auth.dto';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
      token,
    };
  }
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return signupDto;
  }
}
