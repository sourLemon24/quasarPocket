import api from "@/api/index.js"

export default {
  state: {
    transactions: [],
  },
  
  mutations: {
    GET_TRANSACTIONS: (state, resp) => {
      state.transactions = resp.results
      console.log('транзакции, полученыые от сервера через cocтояние', state.transactions)
    },
    ADD_TRANSACTION: (state, data) => {
      state.transactions.unshift(data)
    }
  },
  actions: {
    addTransaction: async ({commit, state, dispatch}, data) => {
      try{
        const resp = await api.addTransaction(data)
        console.log('Была добавлена транзакция', resp)
        commit('ADD_TRANSACTION', resp.data)  
        dispatch('getInitialData') // хорошо бы избавиться от этого решения, так как генерируется лишний запрос
        console.log('новый список транзакций в сторе', state.transactions)
      } catch (e) {
        console.log('Ошибка добавления транзакции', e)
        throw e
      }
    },

  },
  getters : {
  }
}