<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Loading
  }
}
</script>

<template lang="pug">
.home
  HelloWorld(msg='Welcome to Your Vue.js App')
  Loading
</template>

<style lang="postcss" scoped>
</style>
