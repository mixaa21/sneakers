import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./Products";
import { Sizes } from "./Sizes";

@Entity("brands", { schema: "sneakercasual" })
export class Brands {
  @PrimaryGeneratedColumn({ type: "int", name: "brand_id", unsigned: true })
  brandId: number;

  @Column("varchar", { primary: true, name: "brand_name", length: 200 })
  brandName: string;

  @OneToMany(() => Products, (products) => products.fBrand)
  products: Products[];

  @OneToMany(() => Sizes, (sizes) => sizes.fBrand)
  sizes: Sizes[];
}
