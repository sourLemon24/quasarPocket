import store from "@/store/"
import { instance } from './instance.js';

export default {
  signin: async function ({email, password}) {
      const resp = await instance.post('auth/token/obtain/', 
        {email, password}, 
        {skipAuth: true})      
      return resp
  },
  
  signup: async function ({email, password, username}) {
    try {
      const resp = await instance.post('auth/register/', 
        {username, email, password}, 
        {skipAuth: true} 
      )
      return resp
    } catch (e) {
      console.log('api/signup error catch', e)
    }
  },
  
  refreshToken: async function (refreshToken) {
    try {
      console.log('refreshToken in instance', refreshToken)
      const resp = await instance.post('auth/token/refresh/', 
        refreshToken,
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
  
  getTransactions: async function () {
    return instance.get('pockets/transactions/')
  },

  addTransaction: async function (data) {
    const resp = await instance.post('pockets/transactions/', 
      data,)      
    return resp
  },
}