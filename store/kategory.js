export const state = () => ({
  kategory: ''
})

export const mutations = {
  SET_KATEGORY(state, kategory) {
    state.kategory = kategory
  },
}

export const actions = {
  async fetchkategory({ commit }) {
    const { data } = await this.$axios.get('/admin/categories')
    commit('SET_KATEGORY', data);
  },
}

export const getters = {
  kategory(state) {
    return state.kategory
  },
}