import {
  DataType,
  Model,
  Table,
  Column,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import { User } from 'src/users/users.model';
import { Tag } from 'src/tags/tags.model';
import { TagsPost } from 'src/tags-post/tags-post.model';

@Table({ tableName: 'post' })
export class Post extends Model<Post> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
    autoIncrement: false,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  /* @ForeignKey(() => TagsPost)
  @Column({ type: DataType.INTEGER })
  tagId: number; */

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Tag, () => TagsPost)
  tags: Tag[];
}
