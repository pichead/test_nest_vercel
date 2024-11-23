import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.appPort);
}
bootstrap();
