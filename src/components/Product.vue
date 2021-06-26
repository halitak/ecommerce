<script>
export default {
  name: 'Product',
  props: {
    id: String,
    name: String
  }
}
</script>

<template lang="pug">
a.product(:href='`/products/${id}`') {{ name }}
</template>

<style lang="postcss" scoped>
.product {
  @apply flex flex-col;
}
</style>
