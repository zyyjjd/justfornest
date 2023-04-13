/*
 * @Date: 2023-04-11 14:29:17
 * @LastEditTime: 2023-04-11 17:18:26
 * @FilePath: /justfornest/src/posts/posts.controller.ts
 * @Description: 文章控制器
 */
import { ApiOperation } from '@nestjs/swagger';
import { PostsService, PostsRo } from './posts.service';
import { CreatePostDto } from './dto/create-post.dot';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * 创建文章
   * @param post
   */
  @ApiOperation({ summary: '创建文章' })
  @Post()
  async create(@Body() post: CreatePostDto) {
    return await this.postsService.create(post);
  }

  /**
   * 获取所有文章
   */
  @ApiOperation({ summary: '获取所有文章' })
  @Get()
  async findAll(@Query() query): Promise<PostsRo> {
    return await this.postsService.findAll(query);
  }

  /**
   * 获取指定文章
   */
  @ApiOperation({ summary: '获取指定文章' })
  @Get(':id')
  async findById(@Param('id') id) {
    return await this.postsService.findById(id);
  }

  /**
   * 更新文章
   * @param id
   * @param post
   */
  @ApiOperation({ summary: '更新文章' })
  @Put(':id')
  async updateById(@Param('id') id, @Body() post: CreatePostDto) {
    return await this.postsService.updateById(id, post);
  }

  /**
   * 删除
   * @param id
   */
  @ApiOperation({ summary: '删除' })
  @Delete('id')
  async rmeove(@Param('id') id) {
    return await this.postsService.remove(id);
  }
}
