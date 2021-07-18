import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    await app.listen(PORT, () =>
      console.log(`Server is running on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};

bootstrap();
