import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API

const MUTATIONS = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  LOGOUT: 'LOGOUT',
  CHECK_USER: 'CHECK_USER'
}

export default createStore({
  state: {
    user: null,
    jwt: localStorage.getItem('jwt')
  },
  mutations: {
    [MUTATIONS.LOGIN] (state, res) {
      state.user = res.user
      state.jwt = res.jwt.token
      localStorage.setItem('jwt', res.jwt.token)
    },
    [MUTATIONS.SIGNUP] (state, res) {
      state.user = res.user
      state.jwt = res.jwt.token
      localStorage.setItem('jwt', res.jwt.token)
    },
    [MUTATIONS.LOGOUT] (state) {
      state.user = null
      state.jwt = null
      localStorage.removeItem('jwt')
    },
    [MUTATIONS.CHECK_USER] (state, res) {
      state.user = res.user
    }
  },
  actions: {
    async signup({ commit }, form) {
      const response = await axios.post('signup', form)
      commit(MUTATIONS.SIGNUP, response.data)
    },
    async login({ commit }, form) {
      const response = await axios.post('login', form)
      commit(MUTATIONS.LOGIN, response.data)
    },
    async logout({ commit }) {
      await axios.post('logout')
      commit(MUTATIONS.LOGOUT)
    },
    async checkToken() {
      const response = await axios.post('checkToken', { jwt: this.state.jwt })
      return response.data
    },
    async checkUser({ commit }) {
      const response = await axios.post('checkUser', { jwt: this.state.jwt })
      commit(MUTATIONS.CHECK_USER, response.data)
    },
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
