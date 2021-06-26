<script>
import ProductList from '../components/ProductList.vue'
import ProductFilter from '../components/ProductFilter.vue'
export default {
  name: 'ProductsView',
  components: {
    ProductList,
    ProductFilter
  }
}
</script>

<template lang="pug">
.products
  ProductFilter
  ProductList
</template>

<style lang="postcss" scoped>
.products {
  @apply flex;
}
</style>
