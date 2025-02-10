import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return {
      message: 'This action returns all users',
    };
  }

  findOne(id: number) {
    return {
      message: 'This action returns a #${id} user',
      id,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: 'This action updates a #${id} user',
      id,
      ...updateUserDto,
    };
  }

  remove(id: number) {
    return {
      message: 'This action removes a #${id} user',
      id,
    };
  }
}
