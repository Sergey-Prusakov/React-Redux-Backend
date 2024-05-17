import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagDto } from './dto/tags-dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagService: TagsService) {}

  @Get()
  getAll() {
    return this.tagService.getAllTags();
  }

  @Post()
  create(@Body() tagsPostDto: TagDto) {
    return this.tagService.createTag(tagsPostDto);
  }
}
