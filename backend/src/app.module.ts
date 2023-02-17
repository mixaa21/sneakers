import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import ormconfig from './database/ormconfig'
import {ProductsModule} from "./database/crud/products/products.module";
import {ProductImagesModule} from "./database/crud/product-images/product-images.module";
import {CommonModule} from "./database/crud/common/common.module";
import {BrandsModule} from "./database/crud/brands/brands.module";
import {SizesModule} from "./database/crud/sizes/sizes.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(ormconfig),
      ProductsModule,
      ProductImagesModule,
      CommonModule,
      BrandsModule,
      SizesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}