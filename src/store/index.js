import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/authentication/auth.js'
import client from './modules/clients/client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    client,
  }
})
