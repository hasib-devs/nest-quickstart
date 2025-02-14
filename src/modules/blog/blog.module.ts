import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { BlogController } from './blog.controller';
import { PostService } from './post/posts.service';

@Module({
  imports: [PostModule],
  controllers: [BlogController],
  providers: [PostService],
})
export class BlogModule {}

export default BlogModule;
