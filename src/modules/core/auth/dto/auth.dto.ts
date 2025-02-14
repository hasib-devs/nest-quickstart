import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class SigninDto {
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({
    message: 'Password is required',
  })
  @MinLength(4, {
    message: 'Password should not be less than 4 characters',
  })
  @MaxLength(50, {
    message: 'Password should not be more than 50 characters',
  })
  password: string;
}

export class SignupDto extends CreateUserDto {}
