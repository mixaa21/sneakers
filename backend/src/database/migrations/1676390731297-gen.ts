import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class gen1676390731297 implements MigrationInterface {

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
                    isGenerated: true
                },
                {
                    name: "size",
                    type: 'varchar',
                    length: '10',
                    isNullable: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sizes')
    }
}
