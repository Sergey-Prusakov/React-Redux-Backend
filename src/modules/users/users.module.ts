import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), PostsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
