import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Products} from "../../entities/Products";
import {Repository} from "typeorm";

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Products)
        private productRepository: Repository<Products>
    ) {}

    async getAll() {
        return await this.productRepository.find()
    }

}
