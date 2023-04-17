/*
 * @Date: 2023-04-15 14:35:41
 * @LastEditTime: 2023-04-15 14:36:52
 * @FilePath: /justfornest/src/global/index.ts
 * @Description:
 *
 */
//定义一个全局中间件
export const globalMiddleware = (req: any, res: any, next: any) => {
  console.log('进入全局中间件');
  next();
};
