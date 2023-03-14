import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class gen1669575261652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'brands',
            columns: [
                {
                    name: "brand_id",
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "brand_name",
                    isPrimary: true,
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product_images')
    }

}
