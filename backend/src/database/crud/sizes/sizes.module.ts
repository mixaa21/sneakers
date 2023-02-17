import { Module } from '@nestjs/common';
import { SizesController } from './sizes.controller';
import { SizesService } from './sizes.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Sizes} from "../../entities/Sizes";

@Module({
  imports: [
      TypeOrmModule.forFeature([Sizes])
  ],
  controllers: [SizesController],
  providers: [SizesService]
})
export class SizesModule {}
