export const state = () => ({
  brand: ''
})

export const mutations = {
  SET_BRAND(state, brand) {
    state.brand = brand
  },
}

export const actions = {
  async fetchbrand({ commit }) {
    const data= require('~/assets/data/product.json');
    // console.log(data)
    // const { data } = await this.$axios.get('/admin/product')
    commit('SET_BRAND', data);
  },
}

export const getters = {
  brand(state) {
    return state.brand
  },
}