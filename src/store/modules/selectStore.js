export default {
  namespaced: true,
  state: {
    storeId: localStorage.getItem("storeId") || 0,
    storeIndex: localStorage.getItem("storeIndex") || 0,
    storeName: localStorage.getItem("storeName") || "",
    storePhone: localStorage.getItem("storePhone") || ""
  },
  mutations: {
    CHANGE_STORE: (state, option) => {
      localStorage.setItem("storeId", option.id)
      localStorage.setItem("storeIndex", option.index)
      localStorage.setItem("storeName", option.name)
      localStorage.setItem("storePhone", option.phone)
      state.storeId = option.id
      state.storeIndex = option.index
      state.storeName = option.name
      state.storePhone = option.phone
    }
  }
}