import {MigrationInterface, QueryRunner, Table} from "typeorm"


export class gen1676026953813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'product_images',
            columns: [
                {
                    name: "f_product_id",
                    isPrimary: true,
                    type: 'int',
                    unsigned: true,
                    isNullable: false,
                },
                {
                    name: "src_img",
                    isPrimary: true,
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["f_product_id"],
                    referencedTableName: "products",
                    referencedColumnNames: ["product_id"],
                    onDelete: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product_images')
    }

}
