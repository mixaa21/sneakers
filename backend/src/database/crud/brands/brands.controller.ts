import {Controller, Get} from '@nestjs/common';
import {BrandsService} from "./brands.service";

@Controller('brands')
export class BrandsController {

    constructor(
        private brandsService: BrandsService
    ) {}

    @Get()
    async getAll() {
        return await this.brandsService.getAll()
    }

}
