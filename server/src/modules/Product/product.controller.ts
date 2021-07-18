import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

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
  create(@Body() dto: CreateProductDto) {
    console.log('controller dto: ', { ...dto });

    return this.productService.create(dto);
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
