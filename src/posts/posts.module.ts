/*
 * @Date: 2023-04-13 15:35:27
 * @LastEditTime: 2023-04-15 15:38:01
 * @FilePath: /justfornest/src/posts/posts.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService], //导出服务，这样其他模块就可以使用这个服务了
})
export class PostsModule {}
