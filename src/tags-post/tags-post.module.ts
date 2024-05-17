import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TagsPostController } from './tags-post.controller';
import { TagsPostService } from './tags-post.service';
import { TagsPost } from './tags-post.model';

@Module({
  imports: [SequelizeModule.forFeature([TagsPost])],
  controllers: [TagsPostController],
  providers: [TagsPostService],
})
export class TagsPostModule {}
