<template>
  <div>
    {{products}}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$axios}) {
    const products = (await $axios.get('http://localhost:3001/products/getAll')).data
    return {
      products
    }
  }
}
</script>
