import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { TagsPostModule } from './tags-post/tags-post.module';
import { User } from './users/users.model';
import { Post } from './posts/posts.model';
import { Tag } from './tags/tags.model';
import { TagsPost } from './tags-post/tags-post.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        models: [User, Post, Tag, TagsPost],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    PostsModule,
    TagsModule,
    TagsPostModule,
  ],
})
export class AppModule {}
