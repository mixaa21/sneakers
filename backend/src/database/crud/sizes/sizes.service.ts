import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Sizes} from "../../entities/Sizes";
import {Repository} from "typeorm";

@Injectable()
export class SizesService {

    constructor(
        @InjectRepository(Sizes)
        private sizesRepository: Repository<Sizes>
    ) {}

    async getAll() {
        return await this.sizesRepository.find()
    }

    async getByBrandId_Gender(brandId: number, gender: string) {
        return await this.sizesRepository.createQueryBuilder('sizes')
            .andWhere('sizes.fBrand = :brandId').setParameter('brandId', brandId )
            .andWhere('sizes.gender = :gender').setParameter('gender', gender)
            .getMany()
    }
}
