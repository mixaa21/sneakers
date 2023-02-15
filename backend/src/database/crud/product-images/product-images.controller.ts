import {Body, Controller, Get, Header, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {AnyFilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import * as fs from "fs";
import {ProductImagesService} from "./product-images.service";

@Controller('product-images')
export class ProductImagesController {

    constructor(
        private productImagesService: ProductImagesService
    ) {}

    @Header("Access-Control-Allow-Origin", "*")
    @Get()
    async getAll() {
        return await this.productImagesService.getAll()
    }

    @Post()
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage({
            destination: function (req, file, cb) {
                const {id} = req.body
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
    async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body: { fProductId: string }) {
        const fProductId = JSON.parse(body.fProductId)
        await this.productImagesService.add(files, fProductId)
    }

}
