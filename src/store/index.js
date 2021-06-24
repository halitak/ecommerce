import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async fetchUsers() {
      const response = await axios.get('users')
      return response.data
    },
    async fetchUser(ctx, id) {
      const response = await axios.get(`users/${id}`)
      return response.data
    },
    async fetchProducts(ctx, query = '') {
      const response = await axios.get(`products${query}`)
      return response.data
    },
    async ordering(ctx, { userId, productId }) {
      const response = await axios.post(`users/${userId}/ordering`, {
        id: productId
      })
      return response.data
    },
    async fetchCategories() {
      const response = await axios.get('categories')
      return response.data
    },
    async fetchColors() {
      const response = await axios.get('colors')
      return response.data
    },
    async fetchSizes() {
      const response = await axios.get('sizes')
      return response.data
    }
  },
  modules: {}
})
