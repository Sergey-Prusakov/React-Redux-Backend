import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsPostDto } from './dto/tags-post-dto';
import { TagsPostService } from './tags-post.service';

@Controller('tags-post')
export class TagsPostController {
  constructor(private tagsPostService: TagsPostService) {}

  @Get()
  getAll() {
    return this.tagsPostService.getAllTagsPosts();
  }

  @Post()
  create(@Body() tagsPostDto: TagsPostDto) {
    return this.tagsPostService.createTagsPost(tagsPostDto);
  }
}
