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

    @Get()
    async get() {
        return await this.productsService.getAll()
    }

    @Get('/:id')
    async getOne(@Param('id') productId: number) {
        return await this.productsService.getOne(productId)
    }

    @Post()
    async addProduct(@Body() productInfo: any) {
        return await this.productsService.addProduct(productInfo)
    }
}
