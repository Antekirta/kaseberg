import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './create-category.dto';

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
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
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
