import { MigrationInterface, QueryRunner } from "typeorm"
import dataSource from "../dataSource";
import {Brands} from "../entities/Brands";

export class gen1678804464494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await dataSource.createQueryBuilder()
            .insert()
            .into(Brands)
            .values([
                {
                    brandName: 'Nike'
                },
                {
                    brandName: 'Adidas'
                },
            ]).execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
