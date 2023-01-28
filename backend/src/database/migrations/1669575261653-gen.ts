import { MigrationInterface, QueryRunner } from "typeorm"

export class gen1669575261653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table products (
                product_id int unsigned auto_increment,
                name varchar(100) not null,
                price int not null,
                category varchar(100),
                img varchar(100),
                constraint pk_product_id primary key (product_id)
            );
        `)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table products;
        `)
    }

}
