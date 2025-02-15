import { MikroORM } from '@mikro-orm/postgresql';
import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/media')
export class MediaController {
  constructor(private readonly orm: MikroORM) {}

  @Get()
  findAll() {
    console.log({
      em: this.orm.em,
      schema: this.orm.schema,
    });
    return 'All media';
  }

  @Get(':id')
  findOne() {
    return 'One media';
  }

  @Post()
  create() {
    return 'Create media';
  }

  @Delete()
  remove() {
    return 'Delete media';
  }
}
