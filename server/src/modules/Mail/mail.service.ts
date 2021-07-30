import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface IMailOrder {
  productName: string;
  quantity: number;
  price: number;
  userName: string;
  phone: string;
  promoCode: string;
  deliveryAddress: string;
  comment: string;
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendOrder(order: IMailOrder) {
    // const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: 'murashkin.kirill.konst@gmail.com',
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Новый заказ!',
      template: './order', // `.hbs` extension is appended automatically
      context: {
        productName: order.productName,
        quantity: order.quantity,
        price: order.price,
        userName: order.userName,
        phone: order.phone,
        promoCode: order.promoCode,
        deliveryAddress: order.deliveryAddress,
        comment: order.comment,
      } as IMailOrder,
    });
  }
}
