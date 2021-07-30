import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { MailService } from '../Mail/mail.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private mailService: MailService,
  ) {}

  async getAll() {
    return this.orderModel.find();
  }

  async create(dto: CreateOrderDto) {
    await this.mailService.sendOrder({
      productName: 'order.productName',
      quantity: 5,
      price: 1350,
      userName: 'order.userName',
      phone: 'order.phone',
      promoCode: 'order.promoCode',
      deliveryAddress: 'order.deliveryAddress',
      comment: 'order.comment',
    });

    return this.orderModel.create({ ...dto });
  }
}
