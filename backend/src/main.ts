// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  
//   // Включаем CORS для запросов с Angular приложения
//   app.enableCors({
//     origin: 'http://localhost:4200', // URL Angular приложения
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   });
  
//   await app.listen(3000); // Сервер будет слушать порт 3000
// }
// bootstrap();




// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  
//   // Включите CORS с правильными настройками
//   app.enableCors({
//     origin: 'http://localhost:4200', // Точный адрес фронтенда
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type, Authorization',
//     credentials: true
//   });
  
//   await app.listen(3000);
//   console.log(`Application is running on: ${await app.getUrl()}`);
// }
// bootstrap();









import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'log', 'verbose', 'warn'],
  });

  // Расширенные CORS настройки
  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Powered-By'],
    credentials: true,
    maxAge: 86400,
  });

  const port = 3000;
  await app.listen(port);
  
  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on: ${await app.getUrl()}`);
  logger.debug(`CORS configured for: http://localhost:4200`);
}
bootstrap();