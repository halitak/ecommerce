<script>
import { mapActions } from 'vuex'
import Loading from '@/components/Loading.vue'
export default {
  name: 'Users',
  components: { Loading },
  data() {
    return {
      loading: true,
      error: {},
      users: []
    }
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  async mounted() {
    try {
      this.users = await this.fetchUsers()
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
</script>

<template lang="pug">
.users
  h1 User List
  p(v-if='loading')
    Loading
  p(v-else-if='error.error') {{ error.message }}
  div(v-else)
    p There are {{ users.length }} users
    ul
      li(v-for='user in users')
        router-link(:to='`/users/${user._id}`') {{ user.firstName }} {{ user.lastName }}
</template>

<style lang="postcss" scoped>
.users ul {
  @apply list-none;
}
.users a {
  @apply inline-flex p-1 hover:text-green-400;
}
</style>
