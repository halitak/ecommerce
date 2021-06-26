<script>
import Login from '@/components/Login.vue'

export default {
  name: 'LoginView',
  components: {
    Login
  }
}
</script>

<template lang="pug">
Login.login
</template>

<style lang="postcss" scoped>
.login {
  @apply w-96 my-auto;
}
</style>
