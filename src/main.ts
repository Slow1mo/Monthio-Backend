import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.enableCors();
=======
>>>>>>> parent of ae96f83 (final)
  await app.listen(3000);
}
bootstrap();
