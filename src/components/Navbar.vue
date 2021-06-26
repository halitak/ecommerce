<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  computed: { ...mapState(['user']) },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      try {
        await this.logout()
        this.$router.push({
          path: '/'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template lang="pug">
.nav
  router-link(to='/') Home
  router-link(to='/users') Users
  router-link(to='/products') Products
  router-link(to='/cart') Cart
  router-link(to='/login', v-if='!user') Login
  router-link(to='/signup', v-if='!user') Signup
  button(@click='handleLogout', v-if='user') {{ user?.firstName }} Logout
</template>

<style lang="postcss" scoped>
.nav {
  @apply w-full flex justify-center;
}
.nav a,
.nav button {
  @apply inline-flex p-2 text-gray-800 font-bold hover:text-green-500;
}
.nav a.router-link-exact-active {
  @apply text-green-500;
}
</style>
