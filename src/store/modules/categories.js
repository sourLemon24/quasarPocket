import api from "@/api/index.js"
// import axios from "axios"



export default {
  state: {
    categoryId: null,
    categoryName: null,
    categoryType: null, 
  },
  
  mutations: {
    GET_CATEGORY: (state, resp) => {
      state.categoryId = resp.data.id,
      state.categoryName = resp.data.name,
      state.categoryType = resp.data.category_type
    },
  },
  actions: {
    addCategory: async ({commit}, data) => {
      // eslint-disable-next-line no-useless-catch
      try{
        console.log('объект с данными категории в сторе', data)
        const resp = await api.addCategory(data)
        console.log('Была добавлена категория', resp)
        commit('GET_CATEGORY', resp)
        // commit('AUTH_SUCSESS', resp)
      } catch (e) {
        // commit('GET_ERROR', e.response.data)
        // commit('AUTH_LOGOUT')
        throw e
      }
    },

  },
  getters : {
  }
}