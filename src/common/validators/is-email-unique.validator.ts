import { CreateUserDto } from '@/modules/core/user/dto/create-user.dto';
import { UsersService } from '@/modules/core/user/user.service';
import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(email: string) {
    if (!this.usersService) {
      console.error('UsersService is not injected');
      return false;
    }

    const user = await this.usersService.findByEmail(email);
    return !user;
  }

  defaultMessage(): string {
    return 'Email is already taken';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: CreateUserDto, propertyName: string) {
    registerDecorator({
      name: 'IsEmailUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsEmailUniqueConstraint,
    });
  };
}
