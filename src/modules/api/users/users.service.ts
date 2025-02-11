import { HashService } from '@/common/services/hash.service';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../database/repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
    private readonly hashService: HashService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const payload = {
      ...createUserDto,
      password: await this.hashService.makeHash(createUserDto.password),
    };

    return await this.userRepository.createUser(payload);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(identifier: number | string) {
    if (typeof identifier === 'string') {
      return await this.userRepository.findByEmail(identifier);
    }

    return await this.userRepository.findById(identifier);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: `This action updates a ${id} user`,
      id,
      ...updateUserDto,
    };
  }

  remove(id: number) {
    return {
      message: `This action removes a ${id} user`,
      id,
    };
  }
}
