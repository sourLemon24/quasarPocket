import Router from "@/router/";
import {signin, signup, /* refreshToken */} from "@/api/index.js"
// import axios from "axios"



export default {
  state: {
    username: "",
    email: "",
    error: {},
    accessToken: '',
    refreshToken: '',
  },
  mutations: {
    GET_ERROR: (state, e) => {
      state.error = e
    },
    AUTH_SUCSESS: (state, resp) => {
      state.accessToken = resp.data.access,
      state.refreshToken = resp.data.refresh
    },
    AUTH_LOGOUT: (state) => {
      state.accessToken = "",
      state.refreshToken = ""

      if(Router.currentRoute.name !="Signin") Router.push({name: "Signin"})
    },
  },
  actions: {
    AUTH_REQUEST: async ({commit}, {email, password}) => {
      try{
        const resp = await signin({email, password})
        commit('AUTH_SUCSESS', resp)
      } catch (e) {
        commit('GET_ERROR', e.response.data)
        commit('AUTH_LOGOUT')
        throw e
      }
    },

    AUTH_REG: async ({commit}, {email, password, username}) => {
      try {
        await signup({email, password, username})
      } catch (e) {
        commit('GET_ERROR', e.response.data)
        throw e
      }
    },

    AUTH_LOGOUT: ({commit}) => {
      commit('AUTH_LOGOUT')
    },

    AUTH_REFRESH: async ({commit}, {refreshToken}) => {
      try{
        const resp = await refreshToken ({refreshToken})
        commit('AUTH_SUCSESS', resp)
      } catch (e) {
        console.log('Ошибка при обновлении токена', e)
        commit('AUTH_LOGOUT')
      }
      // return resp.data.access // спорно, возможно и не надо, токены обновляются чз комит
    }

  },
  getters : {
    isLoggedIn: state => !!state.accessToken,
    token: state => state.accessToken
  }
}