import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  create(createBlogDto: CreatePostDto) {
    return {
      data: createBlogDto,
    };
  }

  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdatePostDto) {
    return {
      id,
      data: updateBlogDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
