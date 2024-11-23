import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'utils/constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(env.appPort)
  await app.listen(env.appPort);
  console.log('app listening on : http://localhost:'+env.appPort)
}
bootstrap();
