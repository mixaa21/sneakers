interface ProductImages {
  fProductId: number | null,
  srcImg: string | null
}

export interface ProductType {
  name: string | null,
  price: number | null,
  productId: number | null,
  productImages: Array<ProductImages>
}

export interface ProductsState {
  products: Array<ProductType>
}
