export const state = () => ({
  orders: [],
  count:0,
})

export const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders.orders;
    state.count = orders.count
  },
}

export const actions = {
  async fetchOrders({ commit },obj) {
    const { data } = await this.$axios.get(`/admin/orders?offset=${obj.offset}&limit=${obj.limit}&keyword=${obj.keyword}&status=${obj.status}`);
    // console.log(data);
    // const orders= require('~/assets/data/order.json');
    commit('SET_ORDERS', data);
  },
}

export const getters = {
  orders(state) {
    return state.orders
  },
  count(state){
    return state.count
  }
}