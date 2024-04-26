import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { TargetPost } from 'src/tags-post/tags-post.model';

interface TaskCreationAttrs {
  text: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, TaskCreationAttrs> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    autoIncrement: false,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  role: string;

  @BelongsToMany(() => Post, () => TargetPost)
  posts: Post[];
}
