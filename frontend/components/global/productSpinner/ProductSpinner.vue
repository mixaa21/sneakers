<template>
  <div class="product-spinner">
    <div class="product-spinner__img-container">
      <img class="product-spinner__img" :src="src" alt="">
    </div>
    <v-slider
      v-model="value"
      :step="step"
      class="product-spinner__slider"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: 'ProductSpinner',
  async fetch() {
    this.product = (await fetch(`http://localhost:3001/products/${91}`).then(res=> res.json()))[0]
  },
  props: {
    productImages: {
      type: [],
      default: []
    }
  },
  data: () => {
    return {
      value: 0,
      step: 3.125,
      product: []
    }
  },
  computed: {
    src: function() {
      return this.productImages[(this.productImages.length - 1) * this.value/100].srcImg
    }
  },
}
</script>

<style scoped lang="scss">
@import "style";
</style>
