import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

export enum FileFolderType {
  CATEGORY = 'categories',
  PRODUCT = 'products',
}

const getPathToStatic = (folder: FileFolderType, fileName: string): string => {
  return `/images/${folder}/${fileName}`;
};

@Injectable()
export class FileService {
  createFile(type: FileFolderType, file): string {
    try {
      const [originalFileName, fileExtension] = file.originalname.split('.');
      const fileName = `${originalFileName}_${Date.now()}.${fileExtension}`;
      const filePath = path.resolve(
        __dirname,
        '../../../../client/static/images',
        type,
      );

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      return getPathToStatic(type, fileName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {}
}
