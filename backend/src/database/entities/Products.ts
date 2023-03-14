import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductImages } from "./ProductImages";
import { Brands } from "./Brands";
import { Sizes } from "./Sizes";

@Entity("products", { schema: "sneakercasual" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "product_id", unsigned: true })
  productId: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("int", { name: "price" })
  price: number;

  @OneToMany(() => ProductImages, (productImages) => productImages.fProduct)
  productImages: ProductImages[];

  @ManyToOne(() => Brands, (brands) => brands.products, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "f_brand_id", referencedColumnName: "brandId" }])
  fBrand: Brands;

  @ManyToMany(() => Sizes, (sizes) => sizes.products)
  @JoinTable({
    name: "products_sizes",
    joinColumns: [{ name: "f_product_id", referencedColumnName: "productId" }],
    inverseJoinColumns: [{ name: "f_size_id", referencedColumnName: "sizeId" }],
    schema: "sneakercasual",
  })
  sizes: Sizes[];
}
