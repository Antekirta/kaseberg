import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { SCHEMAS } from '../../../registry/SCHEMAS';
import { Category } from '../../Category/schemas/category.schema';

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
}

export const ProductSchema = SchemaFactory.createForClass(Product);
