import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/posts-dto';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  getAll() {
    return this.postService.getAllPosts();
  }

  @Post()
  create(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }
}
