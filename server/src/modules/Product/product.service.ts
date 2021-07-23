import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { FileFolderType, FileService } from '../File/file.service';

const saveFiles = (
  { coverPrimaryFile, coverSecondaryFile, imagesFiles },
  fileService: FileService,
) => {
  let coverPrimaryPath = '',
    coverSecondaryPath = '',
    pathsToImages = '';

  if (coverPrimaryFile) {
    coverPrimaryPath = fileService.createFile(
      FileFolderType.PRODUCT,
      coverPrimaryFile,
    );
  }

  if (coverSecondaryFile) {
    coverSecondaryPath = fileService.createFile(
      FileFolderType.PRODUCT,
      coverSecondaryFile,
    );
  }

  if (imagesFiles) {
    pathsToImages = imagesFiles.map((imageFile) => {
      return fileService.createFile(FileFolderType.PRODUCT, imageFile);
    });
  }

  return {
    coverPrimary: coverPrimaryPath,
    coverSecondary: coverSecondaryPath,
    images: pathsToImages,
  };
};

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private fileService: FileService,
  ) {}

  async getAll(count = 10, offset = 0): Promise<Product[]> {
    return this.productModel.find().skip(Number(offset)).limit(Number(count));
  }

  async getById(id: ObjectId) {
    return this.productModel.findById(id);
  }

  async create(
    dto: CreateProductDto,
    { coverPrimaryFile, coverSecondaryFile, imagesFiles },
  ): Promise<ObjectId> {
    const product = await this.productModel.create({
      ...dto,
      ...saveFiles(
        { coverPrimaryFile, coverSecondaryFile, imagesFiles },
        this.fileService,
      ),
    });

    return product.id;
  }

  async update(
    id: ObjectId,
    dto: any,
    { coverPrimaryFile, coverSecondaryFile, imagesFiles },
  ): Promise<any> {
    console.log('imagesFiles: ', imagesFiles);

    return this.productModel.findByIdAndUpdate(id, {
      ...dto,
      ...saveFiles(
        { coverPrimaryFile, coverSecondaryFile, imagesFiles },
        this.fileService,
      ),
    });
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);

    return deletedProduct.id;
  }

  async clearAll() {
    return this.productModel.remove({});
  }
}
