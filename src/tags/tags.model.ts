import {
  DataType,
  Model,
  Table,
  Column,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';

import { Post } from 'src/posts/posts.model';
import { TargetPost } from 'src/tags-post/tags-post.model';

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Post, () => TargetPost)
  posts: Post[];

  @ForeignKey(() => TargetPost)
  @Column({ type: DataType.INTEGER })
  postId: number;
}
