<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductFilter',
  data() {
    return {
      categories: [],
      colors: [],
      sizes: [],
      inputCategory: [],
      inputColor: [],
      inputSize: []
    }
  },
  async mounted() {
    this.categories = await this.fetchCategories()
    this.colors = await this.fetchColors()
    this.sizes = await this.fetchSizes()
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchColors', 'fetchSizes']),
    pushQuery(val, variant) {
      console.log(this.$route)
      this.$router.push({
        path: 'products',
        query: { ...this.$route.query, [variant]: val.join(',') }
      })
    }
  },
  watch: {
    inputColor(val) {
      this.pushQuery(val, 'color')
    },
    inputSize(val) {
      this.pushQuery(val, 'size')
    },
    inputCategory(val) {
      this.pushQuery(val, 'category')
    }
  }
}
</script>

<template lang="pug">
.filter
  ul(v-if='categories.length')
    li
      b Category
    li(v-for='category in categories')
      label
        input(
          type='checkbox',
          name='category',
          :value='category.name',
          v-model='inputCategory'
        )
        span {{ category.name }}
  ul(v-if='colors.length')
    li
      b Color
    li(v-for='color in colors')
      label
        input(
          type='checkbox',
          name='color',
          :value='color.name',
          v-model='inputColor'
        )
        span {{ color.name }}
  ul(v-if='sizes.length')
    li
      b Size
    li(v-for='size in sizes')
      label
        input(
          type='checkbox',
          name='size',
          :value='size.name',
          v-model='inputSize'
        )
        span {{ size.name }}
</template>

<style lang="postcss" scoped>
.filter {
}
.filter ul {
  @apply flex flex-col items-start border-2 m-2 py-2 px-4;
}
.filter li {
  @apply py-1;
}
.filter label {
  @apply cursor-pointer;
}
.filter label span {
  @apply ml-1;
}
</style>
