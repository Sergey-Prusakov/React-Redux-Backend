import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './users.model';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      order: [['createdAt', 'ASC']],
    });
    console.log(global);

    return users;
  }

  async createUser(dto: UserDto) {
    return await this.userRepository.create(dto);
  }
}
