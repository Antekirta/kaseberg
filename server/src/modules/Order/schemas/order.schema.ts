import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

interface IOrderProduct {
  id: string;
  title: string;
  quantity: number;
  pricePerItem: number;
  sum: number;
}

@Schema()
export class Order {
  @Prop()
  deliveryAddress: string;

  @Prop()
  comment: string;

  @Prop()
  promoCode: string;

  @Prop()
  price: number;

  @Prop()
  weight: number;

  @Prop()
  data: Date;

  @Prop()
  deliveryCost: string;

  @Prop()
  phone: string;

  @Prop({
    type: [
      {
        type: Object,
      },
    ],
  })
  products: IOrderProduct[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
