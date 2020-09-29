import { createStore } from 'vuex'

import getters from './getters'
import selectedStore from './modules/selectStore'

export default createStore({
  getters,
  modules: {
    selectedStore
  }
})
