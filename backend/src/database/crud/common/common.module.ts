import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Products} from "../../entities/Products";
import {Sizes} from "../../entities/Sizes";
import {ProductImages} from "../../entities/ProductImages";
import {ProductsService} from "../products/products.service";
import {ProductImagesService} from "../product-images/product-images.service";

@Module({
  imports:[
    TypeOrmModule.forFeature([Products, Sizes, ProductImages])
  ],
  controllers: [CommonController],
  providers: [CommonService, ProductsService, ProductImagesService]
})
export class CommonModule {}
