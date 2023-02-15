<template>
  <div class="main">
    <div class="products-container">
      <ItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></ItemCard>
    </div>

  </div>
</template>

<script>
import ItemCard from "@/components/global/itemCard/itemCard";

export default {
  name: 'IndexPage',
  components: {ItemCard},
  async asyncData({$axios}) {
    const products = (await $axios.get('http://localhost:3001/products')).data
    return {
      products,
    }
  },
  data: () => {
    return {
      intervalId: null
    }
  },
  computed: {
  },
  mounted() {
    // this.intervalId = setInterval(this.getData, 2000)
  },
  methods: {
    async getData() {
      this.products = (await this.$axios.get('http://localhost:3001/products')).data
    }
  }
}
</script>

<style scoped lang="scss">
@import "index";
</style>
