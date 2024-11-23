import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'utils/constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.appPort);
}
bootstrap();
