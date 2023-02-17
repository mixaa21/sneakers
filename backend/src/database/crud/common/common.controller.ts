import {Body, Controller, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ProductsService} from "../products/products.service";
import {AnyFilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import * as fs from "fs";
import {Products} from "../../entities/Products";
import {ProductImagesService} from "../product-images/product-images.service";

@Controller('common')
export class CommonController {

    constructor(
        private productsService: ProductsService,
        private productImagesService: ProductImagesService
    ) {}

    @Post('/createProduct')
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage({
            destination: function (req, file, cb) {
                const path = `./data/images/${file.fieldname}`
                fs.mkdirSync(path, {recursive: true})
                cb(null, path)
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now()
                cb(null, uniqueSuffix + '-' + file.originalname.replace('.avif', ''))
            }
        })
    }))
    async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body: any) {
        const productId = (await this.productsService.addProduct(JSON.parse(body.info))).productId
        const filess = await this.productImagesService.add(files, productId)
    }
}
