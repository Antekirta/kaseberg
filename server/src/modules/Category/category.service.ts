import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateCategoryDto } from './create-category.dto';
import { FileFolderType, FileService } from '../File/file.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    private fileService: FileService,
  ) {}

  async getAll(count = 10, offset = 0): Promise<Category[]> {
    return this.categoryModel.find().skip(Number(offset)).limit(Number(count));
  }

  async getById(id: ObjectId): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async create(dto: CreateCategoryDto, imageFile) {
    const coverPath = this.fileService.createFile(
      FileFolderType.CATEGORY,
      imageFile,
    );
    const category = await this.categoryModel.create({
      ...dto,
      cover: coverPath,
    });

    console.log('coverPath: ', coverPath);

    return category.id;
  }

  async update(dto: CreateCategoryDto) {
    console.log('update dto: ', dto);
  }

  async delete(id: ObjectId) {
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id);

    return deletedCategory.id;
  }

  async clearAll() {
    return this.categoryModel.remove({});
  }
}
