import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

// import { TasksModule } from './tasks/tasks.module';
// import { Task } from './tasks/tasks.model';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { TagsPostService } from './tags-post/tags-post.service';
import { TagsPostController } from './tags-post/tags-post.controller';
import { TagsPostModule } from './tags-post/tags-post.module';

@Module({
  controllers: [PostsController, TagsPostController],
  providers: [PostsService, TagsPostService],
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
        models: [
          /* User
          Post
          Tag
          TagPost */
        ],
        autoLoadModels: true,
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
