/*
 * @Date: 2023-04-11 17:14:10
 * @LastEditTime: 2023-04-11 17:18:01
 * @FilePath: /justfornest/src/posts/dto/create-post.dot.ts
 * @Description: 文章数据传输对象
 */
// dto/create-post.dot.ts
export class CreatePostDto {
  readonly id: number;
  readonly title: string;
  readonly author: string;
  readonly content: string;
  readonly thumb_url: string;
  readonly type: number;
  readonly create_time: Date;
  readonly update_time: Date;
}
