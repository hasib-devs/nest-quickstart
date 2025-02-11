import { Role } from '@/common/enums/role.enum';
import { IsEmailUnique } from '@/common/validators/is-email-unique.validator';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;

  @IsEmailUnique()
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsOptional()
  @Transform(({ value }: { value: string }) =>
    value ? value.toLowerCase() : value,
  )
  @IsEnum(Role, {
    message: `Role must be one of these: ${Object.values(Role).join(', ')}`,
  })
  role: Role;
}
