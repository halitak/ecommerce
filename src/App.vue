<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar
  },
  async mounted() {
    await this.checkUser()
  },
  methods: { ...mapActions(['checkUser']) }
}
</script>

<template lang="pug">
.container
  Navbar
  router-view
</template>

<style lang="postcss" scoped>
.container {
  @apply h-screen max-w-5xl mx-auto flex flex-col;
}
</style>
