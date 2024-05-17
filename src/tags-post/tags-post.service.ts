import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { TagsPost } from './tags-post.model';
import { TagsPostDto } from './dto/tags-post-dto';

@Injectable()
export class TagsPostService {
  constructor(
    @InjectModel(TagsPost) private tagsPostRepository: typeof TagsPost,
  ) {}

  async getAllTagsPosts() {
    const users = await this.tagsPostRepository.findAll({
      order: [['createdAt', 'ASC']],
    });
    return users;
  }

  async createTagsPost(dto: TagsPostDto) {
    return await this.tagsPostRepository.create(dto);
  }
}
