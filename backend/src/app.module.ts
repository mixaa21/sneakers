import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import ormconfig from './database/ormconfig'
import {ProductsModule} from "./database/crud/products/products.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(ormconfig),
      ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
