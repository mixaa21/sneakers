<template>
  <div class="product"
  >
    <div class="product__img-container">
      <img class="product__img" :src="src" alt="">
    </div>
    <v-slider
      v-model="value"
      :step="step"
      class="product__slider"
    ></v-slider>
    <div>{{product.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  async asyncData({$axios, route}) {
    const product = (await $axios.get(`http://localhost:3001/products/${route.params.id}`)).data[0]

    return {
      product,
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
@import './index.scss';

</style>
