import axios from 'axios'
import router from '@/router'
import store from '../store'

//import { refreshTokenApi } from '@/api/token'

// This is the base URL where requests comes from
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  proxyHeaders: false,
  credentials: false,
  timeout: 90000
})

/*
 * The interceptor here ensures that we check for the token in local storage every time an http request is made
 */
http.interceptors.request.use(
  config => {
    const token = window.$cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


let isRefreshing = false
const refreshSubscribers = []

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { config, status, data: { message } } = error.response
    const originalRequest = config

    if (status === 401) {
      const oldToken = window.$cookies.get('token')
      if (!oldToken) {
        // reject promise if token is non-existent
        return Promise.reject(error)
      }
      if (message === 'Token has expired and can no longer be refreshed') {
        window.$cookies.remove('token')
        window.$cookies.remove('user')
        router.push('/login')
      }
     
      const retryOrigReq = new Promise((resolve, reject) => {
        subscribeTokenRefresh(token => {
          // replace the expired token and retry
          originalRequest.headers.Authorization = 'Bearer ' + token
          resolve(axios(originalRequest))
        })
      })
      return retryOrigReq
    } else {
      return Promise.reject(error)
    }
  }
)

function subscribeTokenRefresh (cb) {
  refreshSubscribers.push(cb)
}

function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}

export default http
