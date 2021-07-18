import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/Product/product.module';
import { CategoryModule } from './modules/Category/category.module';

// TODO Get rid of hardcoded credentials
const getMongooseConnectionUrl = () => {
  const user = process.env.MONGOOSE_USER || 'antekirta';
  const password = process.env.MONGOOSE_PASSWORD || 'vK_g2PnY9nAxm6C';
  const dbName = process.env.MONGOOSE_DBNAME || 'kaseberg';
  const cluster = 'cluster0';

  return `mongodb+srv://${user}:${password}@${cluster}.2idvh.mongodb.net/${dbName}?retryWrites=true&w=majority`;
};

@Module({
  imports: [
    MongooseModule.forRoot(getMongooseConnectionUrl()),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
