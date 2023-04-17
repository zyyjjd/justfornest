/*
 * @Date: 2023-04-16 20:06:54
 * @LastEditTime: 2023-04-17 10:36:34
 * @FilePath: /justfornest/src/upload/upload.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '../images'),
        filename: (req, file, cb) => {
          const fileName = `${
            new Date().getTime() + extname(file.originalname)
          }`;
          return cb(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
