import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductImages} from "../../entities/ProductImages";

@Injectable()
export class ProductImagesService {
    constructor(
        @InjectRepository(ProductImages)
        private productImagesRepository: Repository<ProductImages>
    ) {}

    async getAll() {
        return await this.productImagesRepository.find()
    }

    async add(files: Array<Express.Multer.File>, fProductId: number): Promise<any> {
        for(let i = 0; i < files.length; i++) {
            const entity = {
                srcImg: `http://localhost:3001/${files[i].path.slice(5).replace('.avif', '')}`,
                fProductId
            }
            
            
            await this.productImagesRepository.save(entity)
        }
    }

}
