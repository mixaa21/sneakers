import {MigrationInterface, QueryRunner, TableColumn} from "typeorm"

export class gen1675850477013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('products', new TableColumn({name: 'brand', type: 'string'}))
        await queryRunner.query(`
            ALTER TABLE products 
            ADD brand varchar(100) NULL;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'brand')
    }

}
