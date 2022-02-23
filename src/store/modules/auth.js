import api from "@/api/index.js"
import jwtDecode from "jwt-decode"
// import axios from "axios"



export default {
  state: {
    username: "",
    email: "",
    error: {},
    accessToken: '',
    refreshToken: '',
    accessTokenExpires: null,
    refreshTokenExpires: null,
  },
  mutations: {
    GET_ERROR: (state, e) => {
      state.error = e
    },
    AUTH_SUCSESS: (state, resp) => {
      state.accessToken = resp.data.access,
      state.refreshToken = resp.data.refresh,
      state.accessTokenExpires = jwtDecode(state.accessToken).exp
      state.refreshTokenExpires = jwtDecode(state.refreshToken).exp
    },
    CLEAR_USER_DATA: () => {
      console.log('wait reload')
      location.reload()  
    },
  },
  actions: {
    AUTH_REQUEST: async ({commit, dispatch}, {email, password}) => {
      try{
        const resp = await api.signin({email, password})
        commit('AUTH_SUCSESS', resp)
      } catch (e) {
        console.log('ошибка запроса входа в систему')
        commit('GET_ERROR', e.response.data)
        dispatch('logout')
        throw e
      }
    },

    AUTH_REG: async ({commit}, {email, password, username}) => {
      try {
        await api.signup({email, password, username})
      } catch (e) {
        commit('GET_ERROR', e.response.data)
        throw e
      }
    },

    logout: ({commit}) => {
      commit('CLEAR_USER_DATA')
    },

    authRefresh: async ({commit,dispatch}, refreshToken) => {
      try{
        const resp = await api.refreshToken(refreshToken)
        commit('AUTH_SUCSESS', resp)
      } catch (e) {
        console.log('Ошибка при обновлении токена', e)
        dispatch('logout')
      }
      // return resp.data.access // спорно, возможно и не надо, токены обновляются чз комит
    }

  },
  getters : {
    isLoggedIn: state => !!state.accessToken,
    token: state => state.accessToken,
    isAccessTokenValid: (state) => (now) => now < state.accessTokenExpires,
    isRefreshTokenValid: (state) => (now) => now < state.refreshTokenExpires
  }
}