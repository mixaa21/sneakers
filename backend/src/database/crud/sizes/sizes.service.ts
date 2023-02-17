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

    async getOne(sizeId: number) {
        return await this.sizesRepository.createQueryBuilder('sizes').andWhere('sizes.sizeId = :sizeId').setParameter('sizeId', sizeId ).getOne()
    }
}
