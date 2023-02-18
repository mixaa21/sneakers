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
        return await this.productRepository.createQueryBuilder('products')
            .andWhere('products.productId = :productId').setParameter('productId', productId )
            .innerJoinAndSelect('products.productImages', 'productImages')
            .innerJoinAndSelect('products.sizes', 'sizes')
            .getMany()
    }

    async addProduct(entity): Promise<any> {
        const addSizes = []
        entity.selectedSizes.forEach(sizeId => {
            const size = new Sizes()
            size.sizeId = sizeId
            addSizes.push(size)
        })
        entity.sizes = addSizes
        const product = Object.assign(new Products(), entity)
        return await this.productRepository.manager.save(product)
    }

}
