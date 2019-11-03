// axios封装
import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
  // baseURL: 'https://ebs.utrailer.cn:8800/', // api 的 base_url
  baseURL:'/api/',
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // setToken(123)
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    config.headers['Content-Type'] = "application/json;charset=UTF-8"
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response.data
    if (res.status == 0 || !res.status) {
      return Promise.resolve(res)
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }
  },
  error => {
    Message({
      message: '未连接到互联网',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
