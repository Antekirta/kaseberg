import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './create-category.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: ObjectId) {
    return this.categoryService.getById(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'cover', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateCategoryDto) {
    console.log('files: ', files);

    const { cover } = files;

    return this.categoryService.create(dto, cover[0]);
  }

  @Patch()
  update(@Body() dto: CreateCategoryDto) {
    return this.categoryService.update(dto);
  }

  @Delete()
  delete(@Body('id') id: ObjectId) {
    return this.categoryService.delete(id);
  }

  @Delete('clearAll')
  clearAll() {
    return this.categoryService.clearAll();
  }
}
