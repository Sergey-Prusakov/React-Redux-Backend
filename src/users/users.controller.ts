import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user-dto';
import { PostsService } from 'src/posts/posts.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
  @Get()
  getA() {
    return this.postsService.getAllPosts();
  }

  @Post()
  create(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }
}
