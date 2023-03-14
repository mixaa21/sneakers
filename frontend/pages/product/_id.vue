<template>
  <div class="product">
    <div class="r-container">
      <ProductSpinner
        :product-images="product.productImages"
      />
      <div class="c-container">
        <h1 class="product__name">{{product.name}}</h1>
        <h2 class="product__name">{{product.price}}$</h2>

        <SizeGrid
          :size-grids="sizes"
          :available-sizes="product.sizes.map(size => size.sizeId)"
        />
      </div>
    </div>

  </div>
</template>

<script>
import ProductSpinner from "@/components/global/productSpinner/ProductSpinner";
import SizeGrid from "@/components/global/sizeGrid/SizeGrid";
export default {
  name: 'ProductPage',
  components: {SizeGrid, ProductSpinner},
  async asyncData({$axios, route}) {
    const product = (await $axios.get(`http://localhost:3001/products/${route.params.id}`)).data[0]
    const sizes = (await $axios.get(`http://localhost:3001/sizes/${product.fBrand.brandId}/m`)).data
    return {
      product,
      sizes
    }
  },
  data: () => {
    return {
      value: 0,
      step: 3.125,
    }
  },
  computed: {
    src: function() {
      return this.product.productImages[(this.product.productImages.length - 1) * this.value/100].srcImg
    }
  },
}
</script>


<style scoped lang="scss">
@import "./index";
</style>
