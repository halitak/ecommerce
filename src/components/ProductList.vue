<script>
import { mapActions } from 'vuex'
import Product from '@/components/Product.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'ProductList',
  components: { Product, Loading },
  data() {
    return {
      loading: true,
      error: {},
      products: [],
      categories: [],
      variants: [],
      colors: [],
      sizes: []
    }
  },
  computed: {
    queryParams() {
      const query = this.$route.query
      return Object.keys(query)
        .map((key) => {
          return `${key}=${query[key]}`
        })
        .join('&')
    }
  },
  watch: {
    $route: function (val) {
      this.fetchProducts(`?${this.queryParams}`).then((data) => {
        this.products = data
      })
    }
  },
  async mounted() {
    try {
      this.products = await this.fetchProducts()
      this.categories = [
        ...new Set(this.products.map((product) => product.category))
      ]
      this.colors = [
        ...new Set(
          this.products.map((product) => {
            return product.variants.map((variant) => variant.color)
          })
        )
      ]
      this.colors = [...new Set(this.colors.flat(1))]
      this.sizes = [
        ...new Set(
          this.products.map((product) => {
            return product.variants.map((variant) => variant.size)
          })
        )
      ]
      this.sizes = [...new Set(this.sizes.flat(1))]
      this.categories = this.categories.map((name) => {
        return { name }
      })
      this.colors = this.colors.map((name) => {
        return { name }
      })
      this.sizes = this.sizes.map((name) => {
        return { name }
      })
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
}
</script>

<template lang="pug">
.productList
  h1 Product List
  p(v-if='loading')
    Loading
  p(v-else-if='error.error') {{ error }}
  div(v-else)
    p There are {{ products.length }} products
    ul
      li(v-for='product in products')
        Product(:id='`${product._id}`', :name='`${product.name}`')
</template>

<style lang="postcss" scoped>
.productList ul {
  list-style: none;
}
</style>
