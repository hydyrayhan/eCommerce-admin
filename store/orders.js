export const state = () => ({
  orders: [],
})

export const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
}

export const actions = {
  async fetchOrders({ commit }) {
    // const { data } = await this.$axios.get('/perfumes')
    const orders= require('~/assets/data/order.json');
    commit('SET_ORDERS', orders);
  },
}

export const getters = {
  orders(state) {
    return state.orders
  },
}