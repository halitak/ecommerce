<script>
export default {
  name: 'CartView'
}
</script>

<template lang="pug">
.cart Cart
  router-link(to='/checkout') Go to Checkout
</template>

<style lang="postcss" scoped>
.cart {
  @apply flex flex-col;
}
</style>
