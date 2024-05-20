import {
  DataType,
  Model,
  Table,
  Column,
  BelongsToMany,
} from 'sequelize-typescript';

import { Post } from './posts.model';
import { TagsPost } from './tags-post.model';

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
    autoIncrement: false,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  /* @ForeignKey(() => TagsPost)
  @Column({ type: DataType.INTEGER })
  postId: number; */

  @BelongsToMany(() => Post, () => TagsPost)
  posts: Post[];
}
