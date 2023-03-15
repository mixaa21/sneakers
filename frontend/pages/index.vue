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

<script lang="ts">
import Vue from "vue";
import ItemCard from "~/components/global/itemCard/itemCard.vue";
import {mapGetters} from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  components: {ItemCard},
  // async asyncData({$axios}) {
  //   const products = (await $axios.get('http://localhost:3001/products')).data
  //   return {
  //     products,
  //   }
  // },
  data: () => {
    return {
      intervalId: null,
    }
  },
  computed: {
    allPosts() {
      return this.$accessor.posts
    },
    products() {
      return this.$accessor.allProducts
    }
  },
  methods: {
    async getData() {
      this.products = (await this.$axios.get('http://localhost:3001/products')).data
    }
  },
  async mounted() {
    await this.$store.dispatch('getProducts')
  }
})
</script>

<style scoped lang="scss">
@import "index";
</style>
