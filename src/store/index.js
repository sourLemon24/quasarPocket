import Vue from 'vue'
import Vuex from 'vuex'
// import 'es6-promise/auto';
import auth from "./modules/auth"
// import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    error: {}
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    auth
  }
})

export default store

