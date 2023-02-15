import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import ormconfig from './database/ormconfig'
import {ProductsModule} from "./database/crud/products/products.module";
import {ProductImagesModule} from "./database/crud/product-images/product-images.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(ormconfig),
      ProductsModule,
      ProductImagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
