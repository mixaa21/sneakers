import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class gen1676651906442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'sizes',
            columns: [
                {
                    name: "size_id",
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "ru_size",
                    type: 'varchar',
                    length: '4',
                    isNullable: false,
                },
                {
                    name: "us_size",
                    type: 'varchar',
                    length: '4',
                },
                {
                    name: "uk_size",
                    type: 'varchar',
                    length: '4',
                },
                {
                    name: "eu_size",
                    type: 'varchar',
                    length: '4',
                },
                {
                    name: "cm_size",
                    type: 'varchar',
                    length: '4',
                },
                {
                    name: "gender",
                    type: 'enum',
                    enum: ['m','w']
                },
                {
                    name: "f_brand_id",
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
        await queryRunner.dropTable('sizes')
    }


}
