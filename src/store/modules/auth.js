//import Vue from "vue";
//import {logoutUser} from "@/api/login";

const state = {
  user: {},
  token: null,
}

const getters = {
  isAuthenticated: () => {
    return window.$cookies.get('token') !== null
  },
  getUser () {
    return window.$cookies.get('user')
  },
  getToken () {
    return window.$cookies.get('token')
  },
  getUserRegister (state) {
    return state.user
  },
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },

  SET_USER (state, user) {
    state.user = user
  },
  SET_SESSION_TIMEOUT (state, data) {
    state.showSessionTimeout = data
  },
}

const actions = {
  SET_TOKEN (context, token) {
    context.commit('SET_TOKEN', token)
  },

  SET_USER (context, user) {
    context.commit('SET_USER', user)
  },
  SET_SESSION_TIMEOUT (context, status) {
    if (status) {
      setTimeout(() => {
        context.commit('SET_SESSION_TIMEOUT', true)
      }, 1680000)
    } else {
      context.commit('SET_SESSION_TIMEOUT', false)
    }
  },

  // LOGOUT_USER (context) {
  //   return new Promise((resolve, reject) => {
  //     logoutUser().then(() => {
  //       context.commit('SET_TOKEN', null)
  //       context.commit('SET_USER', null)
  //       window.$cookies.remove('token')
  //       window.$cookies.remove('user')

  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   });
  // }
}

export default {
    state,
    getters,
    actions,
    mutations
}
