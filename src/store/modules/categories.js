import api from "@/api/index.js"

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
    },
    UPDATE_CATEGORIES: (state) => {
      // state.categories = data
      console.log('список категорий после обновление через сторе', state.categories)
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
    deleteCategory: async ({state, dispatch}, data) => {
      try{
        await api.deleteCategory(data)
        console.log('Была удалена категория', data)
        dispatch('getInitialData') // хорошо бы избавиться от этого решения, так как генерируется лишний запрос
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
        dispatch('getInitialData') // хорошо бы избавиться от этого решения, так как генерируется лишний запрос
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
    }
  },
  getters : {
  }
}