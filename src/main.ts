import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './constant';
import { env2 } from 'utils/constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env2.appPort);
}
bootstrap();
