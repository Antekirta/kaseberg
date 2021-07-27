import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { FileFolderType, FileService } from '../File/file.service';
import { CategoryCollectionName } from '../Category/schemas/category.schema';

interface saveFilesObject {
  coverPrimary?: string;
  coverSecondary?: string;
  images?: string;
}

const saveFiles = (
  { coverPrimaryFile, coverSecondaryFile, imagesFiles },
  fileService: FileService,
) => {
  const result: saveFilesObject = {};

  if (coverPrimaryFile) {
    result.coverPrimary = fileService.createFile(
      FileFolderType.PRODUCT,
      coverPrimaryFile,
    );
  }

  if (coverSecondaryFile) {
    result.coverSecondary = fileService.createFile(
      FileFolderType.PRODUCT,
      coverSecondaryFile,
    );
  }

  if (imagesFiles) {
    result.images = imagesFiles.map((imageFile) => {
      return fileService.createFile(FileFolderType.PRODUCT, imageFile);
    });
  }

  return result;
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

  async getProductsByIds(ids: string[]) {
    return this.productModel.find({
      _id: {
        $in: ids,
      },
    });
  }

  async getPopularProducts() {
    return this.productModel.find({
      isPopular: true,
    });
  }

  getAllWithCategories() {
    return this.productModel
      .aggregate([
        {
          $lookup: {
            from: CategoryCollectionName,
            localField: 'category',
            foreignField: '_id',
            as: 'category',
          },
        },
      ])
      .then((products) => {
        const categoriesMap = {};

        products.forEach((product) => {
          const category = product.category[0];

          if (category) {
            if (categoriesMap[category.urlAlias]) {
              categoriesMap[category.urlAlias] = {
                title: category.title,
                urlAlias: category.urlAlias,
                products: [
                  ...categoriesMap[category.urlAlias].products,
                  {
                    ...product,
                    category: null,
                  },
                ],
              };
            } else {
              categoriesMap[category.urlAlias] = {
                categoryTitle: category.title,
                title: category.title,
                urlAlias: category.urlAlias,
                products: [
                  {
                    ...product,
                    category: null,
                  },
                ],
              };
            }
          }
        });

        return categoriesMap;
      });
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
