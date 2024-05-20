import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import { User } from 'src/modules/users/users.model';

@Table({ tableName: 'post' })
export class Post extends Model<Post> {
  @Column({
    type: DataType.INTEGER,
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
  @Column({ type: DataType.INTEGER })
  userId: string;

  /* @ForeignKey(() => TagsPost)
  @Column({ type: DataType.INTEGER })
  tagId: number; */

  @BelongsTo(() => User)
  user: User;

  /* @BelongsToMany(() => Tag, () => TagsPost)
  tags: Tag[]; */
}
