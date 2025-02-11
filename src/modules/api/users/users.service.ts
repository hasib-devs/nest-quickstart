import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from '../../../database/repositories/users.repository';
import { HashService } from '@/common/services/hash.service';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } =
      await this.userRepository.createUser(payload);
    return userData;
  }

  async findAll() {
    const data = await this.userRepository.findAll();
    return data;
  }

  async findOne(identifier: number) {
    const data = await this.userRepository.findById(identifier);
    if (!data) {
      throw new NotFoundException({
        message: 'User not found',
      });
    }

    return data;
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
