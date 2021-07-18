import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(count = 10, offset = 0): Promise<Product[]> {
    return this.productModel.find().skip(Number(offset)).limit(Number(count));
  }

  async getById(id: ObjectId) {
    return this.productModel.findById(id);
  }

  async create(dto: CreateProductDto): Promise<ObjectId> {
    const product = await this.productModel.create({ ...dto });

    console.log('dto: ', { ...dto });

    return product.id;
  }

  async update(dto: CreateProductDto) {
    console.log(dto);
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);

    return deletedProduct.id;
  }

  async clearAll() {
    return this.productModel.remove({});
  }
}
