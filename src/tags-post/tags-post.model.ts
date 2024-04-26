import {
  DataType,
  Model,
  Table,
  Column,
  // BelongsTo,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Post } from 'src/posts/posts.model';
import { Tag } from 'src/tags/tags.model';

@Table({ tableName: 'targetPost' })
export class TargetPost extends Model<TargetPost> {
  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  postId: number;

  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  tagId: number;

  @BelongsTo(() => Post)
  post: Post;

  @BelongsTo(() => Tag)
  tag: Tag;
}
