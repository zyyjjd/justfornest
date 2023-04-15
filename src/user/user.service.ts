/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 11:20:26
 * @FilePath: /justfornest/src/user/user.service.ts
 * @Description:
 *
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // 1. 通过构造函数依赖注入
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  //增加一个用户
  addUser() {
    const data = new User();
    data.userName = 'test';
    data.userPassword = '123';
    return this.user.save(data);
  }

  //删除一个用户
  delteUser(id: string) {
    return this.user.delete(id);
  }

  //修改一个用户
  updateUser(id: number) {
    const data = new User();
    data.userName = 'jjd';
    return this.user.update(id, data);
  }

  //查询所有用户
  findAll() {
    return this.user.find();
  }

  //根据姓名查找一个用户
  findByName(name: string) {
    return this.user.find({
      where: {
        userName: Like(`%${name}%`),
      },
    });
  }
}
