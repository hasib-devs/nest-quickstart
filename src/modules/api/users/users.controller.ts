import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dto/user-response-dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);

    return plainToInstance(UserResponseDto, data);
  }

  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return plainToInstance(UserResponseDto, data, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.usersService.findOne(id);

    if (!data) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'User not found',
      });
    }

    return data;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
