import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from '../../../common/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async findAll() {
    const data = await this.userRepository.findAll();
    return data;
  }

  async findOne(identifier: number) {
    const data = await this.userRepository.findById(identifier);
    if (data.length === 0) {
      return {
        message: 'User not found',
      };
    }

    return data[0];
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
