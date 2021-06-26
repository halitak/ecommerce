<script>
import Signup from '@/components/Signup.vue'

export default {
  name: 'SignupView',
  components: {
    Signup
  }
}
</script>

<template lang="pug">
Signup.signup
</template>

<style lang="postcss" scoped>
.signup {
  @apply w-96 my-auto;
}
</style>
