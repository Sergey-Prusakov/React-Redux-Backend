import {
  DataType,
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Post } from './posts.model';
import { Tag } from './tags.model';

@Table({ tableName: 'tagsPost' })
export class TagsPost extends Model<TagsPost> {
  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  postId: string;

  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  tagId: string;

  @BelongsTo(() => Post)
  post: Post;

  @BelongsTo(() => Tag)
  tag: Tag;
}
