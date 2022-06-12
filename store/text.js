export const state = () => ({
  gift: [],
  count:0
})

export const mutations = {
  SET_GIFTS(state, gift) {
    state.gift = gift.rows
    state.count = gift.count
  },
}

export const actions = {
  async fetchTexts({ commit },obj) {
    // const products= require('~/assets/data/product.json');
    const { data } = await this.$axios.get(`/admin/texts?offset=${obj.offset}&limit=${obj.limit}`);
    commit('SET_GIFTS', data);
  },
}

export const getters = {
  text(state) {
    return state.gift
  },
  textCount(state){
    return state.count
  }
}