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
import { ProductService } from './product.service';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

const productFileUploadFiles = [
  { name: 'coverPrimary', maxCount: 1 },
  { name: 'coverSecondary', maxCount: 1 },
  { name: 'images', maxCount: 5 },
];

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: ObjectId) {
    return this.productService.getById(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor(productFileUploadFiles))
  create(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { coverPrimary = [], coverSecondary = [], images } = files;

    return this.productService.create(dto, {
      coverPrimaryFile: coverPrimary[0],
      coverSecondaryFile: coverSecondary[0],
      imagesFiles: images,
    });
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor(productFileUploadFiles))
  update(@UploadedFiles() files, @Body() dto: any, @Param('id') id: ObjectId) {
    const { coverPrimary = [], coverSecondary = [], images } = files;

    return this.productService.update(id, dto, {
      coverPrimaryFile: coverPrimary[0],
      coverSecondaryFile: coverSecondary[0],
      imagesFiles: images,
    });
  }

  @Delete()
  delete(@Body('id') id: ObjectId) {
    return this.productService.delete(id);
  }

  @Delete('clearAll')
  clearAll() {
    return this.productService.clearAll();
  }
}
