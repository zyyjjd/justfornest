/*
 * @Date: 2023-04-13 15:35:27
 * @LastEditTime: 2023-04-15 13:47:47
 * @FilePath: /justfornest/src/posts/posts.service.spec.ts
 * @Description:
 *
 */
import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
