import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Brands } from "./Brands";

@Entity("sizes", { schema: "sneakercasual" })
export class Sizes {
  @PrimaryGeneratedColumn({ type: "int", name: "size_id", unsigned: true })
  sizeId: number;

  @Column("varchar", { name: "ru_size", length: 4 })
  ruSize: string;

  @Column("varchar", { name: "us_size", length: 4 })
  usSize: string;

  @Column("varchar", { name: "uk_size", length: 4 })
  ukSize: string;

  @Column("varchar", { name: "eu_size", length: 4 })
  euSize: string;

  @Column("varchar", { name: "cm_size", length: 4 })
  cmSize: string;

  @Column("enum", { name: "gender", enum: ["m", "w"] })
  gender: "m" | "w";

  @ManyToMany(() => Products, (products) => products.sizes)
  products: Products[];

  @ManyToOne(() => Brands, (brands) => brands.sizes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "f_brand_id", referencedColumnName: "brandId" }])
  fBrand: Brands;
}
