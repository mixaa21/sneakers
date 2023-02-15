import { Module } from '@nestjs/common';
import { ProductImagesController } from './product-images.controller';
import { ProductImagesService } from './product-images.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductImages} from "../../entities/ProductImages";

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductImages])
  ],
  controllers: [ProductImagesController],
  providers: [ProductImagesService]
})
export class ProductImagesModule {}
