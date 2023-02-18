import {
  Column,
  Entity,
  JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sizes } from "./Sizes";
import {ProductImages} from "./ProductImages";

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

  @Column("varchar", { name: "brand", nullable: true, length: 100 })
  brand: string | null;

  @OneToMany(() => ProductImages, (productImages) => productImages.fProduct)
  productImages: ProductImages[];

  @ManyToMany(() => Sizes, (sizes) => sizes.products)
  @JoinTable({
    name: "products_sizes",
    joinColumns: [{ name: "f_product_id", referencedColumnName: "productId" }],
    inverseJoinColumns: [{ name: "f_size_id", referencedColumnName: "sizeId" }],
    schema: "sneakercasual",
  })
  sizes: Sizes[];
}
