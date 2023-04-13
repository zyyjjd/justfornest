/*
 * @Date: 2023-04-11 14:33:07
 * @LastEditTime: 2023-04-11 16:45:13
 * @FilePath: /justfornest/src/posts/posts.service.ts
 * @Description: 文章服务
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { PostsEntity } from './posts.entity';

export interface PostsRo {
  list: PostsEntity[];
  count: number;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  //创建文章
  async create(post: PostsEntity): Promise<PostsEntity> {
    const { title } = post;
    if (!title) {
      throw new HttpException('文章标题不能为空', 401);
    }
    const doc = await this.postsRepository.findOne({ where: { title } });
    if (doc) {
      throw new HttpException('文章标题已存在', 401);
    }
    return await this.postsRepository.save(post);
  }

  //获取文章列表
  async findAll(query): Promise<PostsRo> {
    // const qb = await DataSource.getRepository(PostsEntity).createQueryBuilder(
    //   'post',
    // );
    const qb = await this.postsRepository.createQueryBuilder('post');
    qb.where('1=1');
    qb.orderBy('post.create_time', 'DESC');

    const count = await qb.getCount();
    const { pageNum = 1, pageSize = 10, ...params } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const posts = await qb.getMany();
    return { list: posts, count: count };
  }

  //获取指定文章
  async findById(id): Promise<PostsEntity> {
    return await this.postsRepository.findOne(id);
  }

  //更新文章
  async updateById(id, post): Promise<PostsEntity | void> {
    const existPost = await this.postsRepository.findOne(id);
    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在}`, 401);
    }
  }

  //删除文章
  async remove(id) {
    const existPost = await this.postsRepository.findOne(id);
    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在}`, 401);
    }
    return await this.postsRepository.remove(existPost);
  }
}
