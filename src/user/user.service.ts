/*
 * @Date: 2023-04-12 09:08:58
 * @LastEditTime: 2023-04-13 15:02:54
 * @FilePath: /justfornest/src/user/user.service.ts
 * @Description:
 *
 */
import { Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export interface IUser {
  list: Array<CreateUserDto>;
  count: number;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly postsRepository: Repository<User>,
  ) {}

  //创建用户
  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    const { userName } = createUserDto;
    if (!userName) {
      throw new HttpException('用户名不能为空', 401);
    }
    const doc = await this.postsRepository.findOne({ where: { userName } });
    if (doc) {
      throw new HttpException('用户名已存在', 401);
    }
    return await this.postsRepository.save(createUserDto as any);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
