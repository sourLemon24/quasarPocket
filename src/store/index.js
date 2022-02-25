import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth"
import categories from "./modules/categories"
import transactions from "./modules/transactions"
import api from "@/api/index.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    error: {}
  },
  mutations: {
    GET_USERNAME: (state, username) => {
      state.auth.username = username
    }
  },
  getters: {
  },
  modules: {
    auth, categories, transactions
  },
  actions: {
    getInitialData: async ({commit}) => {
      try {
        const username = await api.getUser().then(r => r.data.username)
        commit('GET_USERNAME', username)
        const categories = await api.getCategory().then(r => r.data)
        commit('GET_CATEGORIES', categories)
        const transactions = await api.getTransactions().then(r => r.data)
        commit('GET_TRANSACTIONS', transactions)
      }
      catch (e) {
        console.log('Ошибка в store/getInitialData', e)
      }
    }
  }
})

export default store

