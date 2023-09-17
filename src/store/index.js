import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

import search from './modules/search'

const store = createStore({
  plugins: [createPersistedState()],
  // your store options...
  modules: {
    search
  },
  getters,
})

export default store