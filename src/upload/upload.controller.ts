/*
 * @Date: 2023-04-16 20:06:54
 * @LastEditTime: 2023-04-17 10:35:52
 * @FilePath: /justfornest/src/upload/upload.controller.ts
 * @Description:
 *
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file, 'file');
    return '我憋不住了';
  }

  @Get('abc')
  test() {
    return 'test';
  }

  @Get('download')
  download(@Res() res) {
    const url = join(__dirname, '../images/1681649598581.jpg');
    res.download(url);
  }
}
