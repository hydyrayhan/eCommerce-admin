export const actions = {
  async nuxtServerInit({ dispatch }) {
    // const adminToken = this.$cookies.get('admin-token')

    // if (adminToken) {
    //   dispatch('admin/setAdminToken', adminToken)
    //   await dispatch('fetchData')
    // }
      await dispatch('fetchData')
  },

  async fetchData({ dispatch }) {
    await dispatch('orders/fetchOrders')
    await dispatch('language/fetchLanguage')
    await dispatch('products/fetchProducts')
    await dispatch('kategory/fetchkategory')
    await dispatch('brand/fetchbrand',{limit:20,offset:0})
  },
}
