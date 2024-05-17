import { Injectable } from '@nestjs/common';
import { Tag } from './tags.model';
import { InjectModel } from '@nestjs/sequelize';
import { TagDto } from './dto/tags-dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag) private tagRepository: typeof Tag) {}

  async getAllTags() {
    const users = await this.tagRepository.findAll({
      order: [['createdAt', 'ASC']],
    });
    return users;
  }

  async createTag(dto: TagDto) {
    return await this.tagRepository.create(dto);
  }
}
