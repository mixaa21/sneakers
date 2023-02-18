import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SizesService} from "./sizes.service";

@Controller('sizes')
export class SizesController {

    constructor(
        private sizesService: SizesService
    ) {}

    @Get()
    async getAll() {
        return await this.sizesService.getAll()
    }
    @Get('/:brandId/:gender')
    async getOne(@Param('brandId') brandId: number, @Param('gender') gender: string) {
        return await this.sizesService.getByBrandId_Gender(brandId, gender)
    }
}
