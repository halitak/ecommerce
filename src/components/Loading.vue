<script>
export default {
  name: 'Loading'
}
</script>

<template lang="pug">
.loading
</template>

<style lang="postcss" scoped>
.loading {
  @apply w-6 h-6 rounded-full border-solid border-green-500 border-4 m-auto;
  @apply animate-spin;
  border-top-color: transparent;
  border-left-color: transparent;
}
</style>
