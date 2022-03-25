import api from "@/api/index.js"

export default {
  state: {
    categories: [],
  },
  
  mutations: {
    GET_CATEGORIES: (state, resp) => {
      state.categories = resp
      // console.log('категории, полученыые от сервера через cocтояние', state.categories)
    },
    ADD_CATEGORY: (state, data) => {
      state.categories.splice(0, 0, data)
    },
    UPDATE_CATEGORIES: (state) => {
      // state.categories = data
      console.log('список категорий после обновление через сторе', state.categories)
    }
  },
  actions: {
    addCategory: async ({commit,dispatch, state}, data) => {
      try{
        const resp = await api.addCategory(data)
        console.log('Была добавлена категория', resp)
        commit('ADD_CATEGORY', resp.data)
        dispatch('getCategories', {})
        console.log('новый список категорий в сторе', state.categories)
      } catch (e) {
        console.log('Ошибка добавления категории', e)
        throw e
      }
    },
    deleteCategory: async ({state, dispatch}, data) => {
      try{
        await api.deleteCategory(data)
        console.log('Была удалена категория', data)
        dispatch('getCategories', {})
        console.log('новый список категорий в сторе', state.categories)
      } catch (e) {
        console.log('Ошибка удаления категории', e)
        throw e
      }
    },
    editCategory: async ({state, dispatch}, data) => {
      try{
        await api.editCategory(data)
        console.log('Была отредактирована категория', data)
        dispatch('getCategories', {})
        console.log('новый список категорий в сторе', state.categories)
      } catch (e) {
        console.log('Ошибка редактирования категории', e)
        throw e
      }
    },
    updateCategory: ({commit, state}, data) => {
      const newCategory = state.categories.find(item => item.id == data.category.id)
      const index = state.categories.findIndex(item => item.id == data.category.id)
      newCategory.transactions_sum = +newCategory.transactions_sum + +data.amount 
      const newCategories = state.categories.splice(index, 1, newCategory)
      commit('UPDATE_CATEGORIES', newCategories) // работает, скорее всего можно написать лучше
    },
    getCategories: async ({commit}, data) => {
      try {
        const categories = await api.getCategories(data).then(r => r.data)
        commit('GET_CATEGORIES', categories)
      }
      catch (e) {
        console.log('Ошибка в store/categories/getCategories', e)
      }
    },
  },
  getters : {
  }
}