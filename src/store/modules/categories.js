import api from "@/api/index.js"
// import axios from "axios"



export default {
  state: {
    categories: [],
  },
  
  mutations: {
    GET_CATEGORIES: (state, resp) => {
      state.categories = resp
      console.log('категории, полученыые от сервера через cocтояние', state.categories)
    },
    ADD_CATEGORY: (state, data) => {
      state.categories.unshift(data)
    }
  },
  actions: {
    addCategory: async ({commit, state}, data) => {
      try{
        const resp = await api.addCategory(data)
        console.log('Была добавлена категория', resp)
        commit('ADD_CATEGORY', resp.data)
        console.log('новый список категорий в сторе', state.categories)
      } catch (e) {
        console.log('Ошибка добавления категории', e)
        throw e
      }
    },

  },
  getters : {
  }
}