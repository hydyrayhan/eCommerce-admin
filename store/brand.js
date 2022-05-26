export const state = () => ({
  brand: '',
  count:0,
})

export const mutations = {
  SET_BRAND(state, brand) {
    state.brand = brand.rows,
    state.count = brand.count
  },
}

export const actions = {
  async fetchbrand({ commit },obj) {
    // console.log(obj.limit,obj.offset);
    // const data= require('~/assets/data/product.json');
    // console.log(data)
    const { data } = await this.$axios.get(`/admin/brands?limit=${obj.limit}&offset=${obj.offset}`);
    console.log(data);
    commit('SET_BRAND', data);
  },
}

export const getters = {
  brand(state) {
    return state.brand
  },
  brandCount(state) {
    return state.count
  },
}