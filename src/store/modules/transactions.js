// import api from "@/api/index.js"

export default {
  state: {
    transactions: [],
  },
  
  mutations: {
    GET_TRANSACTIONS: (state, resp) => {
      state.transactions = resp
      console.log('транзакции, полученыые от сервера через cocтояние', state.transactions)
    }
  },
  actions: {
    // addCategory: async ({commit, state}, data) => {
    //   try{
    //     const resp = await api.addCategory(data)
    //     console.log('Была добавлена категория', resp)
    //     commit('ADD_CATEGORY', resp.data)
    //     console.log('новый список категорий в сторе', state.categories)
    //   } catch (e) {
    //     console.log('Ошибка добавления категории', e)
    //     throw e
    //   }
    // },

  },
  getters : {
  }
}