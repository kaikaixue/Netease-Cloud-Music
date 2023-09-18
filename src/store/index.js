import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

import search from './modules/search'
import user from './modules/user'

const store = createStore({
  plugins: [createPersistedState()],
  // your store options...
  modules: {
    search,
    user,
  },
  getters,
})

export default store