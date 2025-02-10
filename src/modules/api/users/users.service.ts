import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async findAll() {
    const data = await this.userRepository.findAll();
    console.log(data);
    return {
      message: 'This action returns all users',
      data,
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
