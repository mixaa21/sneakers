import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class gen1669575261653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'product_id',
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                },
                {
                    name: "price",
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'f_brand_id',
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                },

            ],
            foreignKeys: [
                {
                    columnNames: ['f_brand_id'],
                    referencedColumnNames: ['brand_id'],
                    referencedTableName: 'brands'
                }
            ]

        }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table products;
        `)
    }

}
