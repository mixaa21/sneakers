import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Brands} from "../../entities/Brands";
import {Repository} from "typeorm";

@Injectable()
export class BrandsService {

    constructor(
        @InjectRepository(Brands)
        private brandsRepository: Repository<Brands>
    ) {}

    async getAll() {
        return await this.brandsRepository.find()
    }

}
