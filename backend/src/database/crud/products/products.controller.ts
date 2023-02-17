import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    HttpStatus, Param,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {AnyFilesInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import * as fs from "fs";

@Controller('products')
export class ProductsController {

    constructor(
        private productsService: ProductsService
    ) {}

    @Header("Access-Control-Allow-Origin", "*")
    @Get()
    async get() {
        return await this.productsService.getAll()
    }

    @Header("Access-Control-Allow-Origin", "*")
    @Get('/:id')
    async getOne(@Param('id') productId: number) {
        return await this.productsService.getOne(productId)
    }

    @Post()
    async uploadFile(@Body() info: any) {
        return await this.productsService.addProduct(info)
    }
}
