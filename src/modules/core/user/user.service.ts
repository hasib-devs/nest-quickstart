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
      password: await this.hashService.generateHash(createUserDto.password),
    };

    return await this.userRepository.createUser(payload);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
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
