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
import { TargetPost } from 'src/tags-post/tags-post.model';

@Table({ tableName: 'post' })
export class Post extends Model<Post> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @BelongsToMany(() => Tag, () => TargetPost)
  tags: Tag[];
}
