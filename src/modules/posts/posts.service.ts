import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/posts.model';
import { PostDto } from './dto/posts-dto';
import { User } from 'src/modules/users/users.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async getAllPosts() {
    const posts = await this.postRepository.findAll({
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['id', 'email', 'password', 'role'],
        },
      ],
    });
    return posts;
  }

  async createPost(dto: PostDto) {
    return await this.postRepository.create(dto);
  }
}
