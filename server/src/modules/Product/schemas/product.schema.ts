import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SCHEMAS } from '../../../registry/SCHEMAS';
import { Category } from '../../Category/schemas/category.schema';
import { PRODUCT_TYPES } from '../../../registry/enums/product';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  urlAlias: string;

  @Prop()
  subtitle: string;

  @Prop()
  description: string;

  @Prop()
  weight: number;

  @Prop()
  ideas: string;

  // TODO Gonna be a reference to Review entity
  @Prop()
  reviews: string;

  @Prop()
  images: string[];

  @Prop()
  coverPrimary: string;

  @Prop()
  coverSecondary: string;

  @Prop()
  price: number;

  @Prop()
  dateCreate: Date;

  @Prop()
  dateReady: Date;

  @Prop()
  dateExpiration: Date;

  @Prop()
  isPopular: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: SCHEMAS.Category,
  })
  category: Category;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: SCHEMAS.Product,
      },
    ],
  })
  relatedGoods: Product[];

  @Prop()
  productType: PRODUCT_TYPES;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
