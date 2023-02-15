<template>
  <div class="item-card">
    <NuxtLink :to="{ name: 'product-id', params: { id: product.productId }}">
      <v-card
        class="product"
        hover
        @mouseover="src = `${product.productImages[product.productImages.length - 6].srcImg}`"
        @mouseout="src = `${product.productImages[product.productImages.length - 1].srcImg}`"
      >
        <div class="product__img-container">
          <img class="product__img"
               :src="src"
               alt="">
        </div>
        <div class='product__brand'>{{ product.brand }}</div>
        <div class='product__name'>{{ product.name }}</div>
      </v-card>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    src: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
@import "style";
</style>
