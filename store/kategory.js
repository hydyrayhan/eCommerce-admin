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
    const kategory= require('~/assets/data/kategory.json');
    commit('SET_KATEGORY', kategory);
  },
}

export const getters = {
  kategory(state) {
    return state.kategory
  },
}