'use strict'

import axios from 'axios'
import store from '../store'

let URL_PREFIX = ''
if (process.env.NODE_ENV !== 'development') {
  URL_PREFIX = 'https://rcrab.top'
} else {
  URL_PREFIX = 'http://localhost:3000'
}

const http = axios.create({
  baseURL: URL_PREFIX,
  timeout: 20000
})

// interceptors
http.interceptors.response.use(res => {
  if (res.data.token) {
    http.defaults.headers.common['Authorization'] = res.data.token
    store.commit('authStatus', {
      isAuth: true
    })
  }
  return res
}, err => {
  // Do something with response error
  return Promise.reject(err)
})

export default http
