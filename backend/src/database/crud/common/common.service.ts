import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Products} from "../../entities/Products";
import {Repository} from "typeorm";

@Injectable()
export class CommonService {

    constructor(
        @InjectRepository(Products)
        private productRepository: Repository<Products>
    ) {}

    async addProduct(entity): Promise<any> {
        return await this.productRepository.save(entity)
    }
}
