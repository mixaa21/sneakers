import {Body, Controller, Get, Post} from '@nestjs/common';
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

    @Post()
    async getOne(@Body() sizeId: any) {
        console.log(sizeId);
        return await this.sizesService.getOne(sizeId.sizeId)
    }
}
