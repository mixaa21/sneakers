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
        return await this.productRepository.createQueryBuilder('products').innerJoinAndSelect('products.productImages', 'productImages').getMany()
    }

    async getOne(productId: number) {
        return await this.productRepository.createQueryBuilder('products').andWhere('products.productId = :productId').setParameter('productId', productId ).innerJoinAndSelect('products.productImages', 'productImages').getMany()
    }

    async save(entity): Promise<any> {
        return await this.productRepository.save(entity)
    }

}
