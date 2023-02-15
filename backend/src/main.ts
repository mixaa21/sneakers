import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {json, static as s, urlencoded} from "express";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(json({limit: '50mb'}));
  app.use(urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
  app.use(s('data', {
    setHeaders: ((res: any, path: string, stat: any) => {
        res.set({'Cache-Control': "public, max-age=31536000"})
    })
  }))
  await app.listen(3001);
}
bootstrap();
