import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products", { schema: "sneakercasual" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "product_id", unsigned: true })
  productId: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("int", { name: "price" })
  price: number;

  @Column("varchar", { name: "category", nullable: true, length: 100 })
  category: string | null;

  @Column("varchar", { name: "img", nullable: true, length: 100 })
  img: string | null;
}
