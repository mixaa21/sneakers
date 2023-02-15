import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Products } from "./Products";

@Entity("product_images", { schema: "sneakercasual" })
export class ProductImages {
  @Column("int", { primary: true, name: "f_product_id", unsigned: true })
  fProductId: number;

  @Column("varchar", { primary: true, name: "src_img", length: 200 })
  srcImg: string;

  @ManyToOne(() => Products, (products) => products.productImages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "f_product_id", referencedColumnName: "productId" }])
  fProduct: Products;
}
