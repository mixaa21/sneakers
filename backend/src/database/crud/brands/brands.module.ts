import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Brands} from "../../entities/Brands";

@Module({
  imports:[
    TypeOrmModule.forFeature([Brands])
  ],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
