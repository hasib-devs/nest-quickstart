import { MikroORM } from '@mikro-orm/mongodb';
import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Media } from './entities/media.entity';

@Controller('api/media')
export class MediaController {
  constructor(private readonly orm: MikroORM) {}

  @Get()
  findAll() {
    console.dir({
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
  async create() {
    const media = new Media();
    media.name = 'My media';
    await this.orm.em.persist(media).flush();
    return 'Create media';
  }

  @Delete()
  remove() {
    return 'Delete media';
  }
}
