import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class gen1676651909971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products_sizes',
            columns: [
                {
                    name: "f_product_id",
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                },
                {
                    name: "f_size_id",
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["f_product_id"],
                    referencedTableName: 'products',
                    referencedColumnNames: ['product_id'],
                    onDelete: "CASCADE"
                },
                {
                    columnNames: ["f_size_id"],
                    referencedTableName: 'sizes',
                    referencedColumnNames: ['size_id']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products_sizes')
    }

}
