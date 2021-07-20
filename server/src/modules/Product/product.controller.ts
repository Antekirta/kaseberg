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
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'coverPrimary', maxCount: 1 },
      { name: 'coverSecondary', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { coverPrimary, coverSecondary } = files;

    return this.productService.create(dto, coverPrimary[0], coverSecondary[0]);
  }

  @Patch()
  update(@Body() dto: CreateProductDto) {
    return this.productService.update(dto);
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
