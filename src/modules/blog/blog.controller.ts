import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post/post.service';
import { CreatePostDto } from './post/dto/create-post.dto';
import { UpdatePostDto } from './post/dto/update-post.dto';

@Controller('api/blogs')
export class BlogController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createBlogDto: CreatePostDto) {
    return this.postService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdatePostDto) {
    return this.postService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
