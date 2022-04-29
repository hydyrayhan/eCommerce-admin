export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    // const { data } = await this.$axios.get('/perfumes')
    const products= require('~/assets/data/product.json');
    commit('SET_PRODUCTS', products);
  },
}

export const getters = {
  products(state) {
    return state.products
  },
}