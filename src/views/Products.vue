<script>
import Products from '../components/Products.vue'
import ProductFilter from '../components/ProductFilter.vue'
export default {
  name: 'ProductsView',
  components: {
    Products,
    ProductFilter
  }
}
</script>

<template lang="pug">
.products
  ProductFilter
  Products
</template>

<style lang="postcss" scoped>
.products {
  @apply flex;
}
</style>
