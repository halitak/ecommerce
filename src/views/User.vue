<script>
import { mapActions } from 'vuex'
export default {
  name: 'User',
  data() {
    return {
      isLoading: true,
      errorMessage: '',
      user: {},
      products: []
    }
  },
  async mounted() {
    try {
      this.user = await this.fetchUser(this.$route.params.id)
      this.products = await this.fetchProduts()
    } catch (error) {
      this.errorMessage = error.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchProduts', 'ordering']),
    async buy(id) {
      const res = await this.ordering({
        userId: this.$route.params.id,
        productId: id
      })
      this.user.orders.push(res)
      // this.user = await this.fetchUser(this.$route.params.id)
    }
  }
}
</script>

<template lang="pug">
.user
  h1 User Detail
  p(v-if='isLoading') Please wait...
  p(v-else-if='errorMessage') {{ errorMessage }}
  div(v-else)
    p {{ user.name }}
    ul(v-if='user.orders.length')
      li(v-for='order in user.orders') {{ order.date }}
        ol
          li(v-for='product in order.products')
            p {{ product.name }} / {{ product.brand }} / {{ product.category }} / {{ product.price }}
    p(v-else) There is not orders
  div(v-if='products.length')
    h2 Create new order
    h3 Products
    ul
      li(v-for='product in products') {{ product.name }}
        button(@click='buy(product._id)') Buy it
</template>

<style lang="scss" scoped>
.user {
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
