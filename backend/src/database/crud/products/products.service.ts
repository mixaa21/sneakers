import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Products} from "../../entities/Products";
import {Repository} from "typeorm";
import DataSource from "../../dataSource";
import {Sizes} from "../../entities/Sizes";

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

    async addProduct(entity): Promise<any> {
        const en = {name: 74, 'f_size_id': 2}
        const product = new Products()
        const size = new Sizes()
        size.sizeId = 2
        product.name = 'sss'
        product.price = 123
        product.sizes = [size]
        await this.productRepository.manager.save(product)
        return await this.productRepository.save(entity)
    }

}
