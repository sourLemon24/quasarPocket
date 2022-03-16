import store from "@/store/"
import { instance } from './instance.js';

export default {
  signin: async function (data) {
    const resp = await instance.post('auth/token/obtain/', 
      data, 
      {skipAuth: true})
    console.log('sign in resp', resp)
    return resp
  },
  
  signup: async function (data) {
      const resp = await instance.post('auth/register/', 
        data, 
        {skipAuth: true} 
      )
      return resp
  },
  
  refreshToken: async function (data) {
    try {
      console.log('refreshToken in instance', data)
      const resp = await instance.post('auth/token/refresh/', 
        data,
        {skipAuth: true} 
      )
      return resp
    } catch (e) {
      console.log('api/refreshToken error', e)
    }
  },
  
  getUser: () => {
    try {
      return instance.get('users/me/',  
      )
    } catch (e) {
      console.log('api/getUser error catch', e)
      store.dispatch('logout')
    }
  },

  addCategory: async function (data) {
    const resp = await instance.post('pockets/categories/', 
      data,)      
    return resp
  },

  getCategory: async function () {
    return instance.get('pockets/categories/transactions-by-categories')
  },
  
  getTransactions: async function (limit = 1000, offset = 0, start_date = '1900-01-01', end_date = '2100-01-01') {
    const params = {limit, offset, start_date, end_date}
    return instance.get('pockets/transactions/',
      {params})
  },

  addTransaction: async function (data) {
    const resp = await instance.post('pockets/transactions/', 
      data,)      
    return resp
  },

  deleteTransaction: async function (data) {
    const resp = await instance.delete(`pockets/transactions/${data}`)      
    return resp
  },

  editTransaction: async function ({transactionId, ...data}) {
    const resp = await instance.patch(`pockets/transactions/${transactionId}/`,
    data)      
    return resp
  },

  deleteCategory: async function (data) {
    const resp = await instance.delete(`pockets/categories/${data}`)      
    return resp
  },

  editCategory: async function ({categoryId, ...data}) {
    const resp = await instance.patch(`pockets/categories/${categoryId}/`,
    data)      
    return resp
  },
}