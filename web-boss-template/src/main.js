import Vue from 'vue'
import Element from './def/el-extend'
import Utils from '../src/lib/utils'
import router from './route'
import App from './App.vue'
import store from './store'

import EventDispatch from 'gc-event/es5'
import './def/theme.scss'

import axios from 'axios'
import VueAxios from 'vue-axios'
// import Home from '../src/views/pages/home'

Vue.config.productionTip = false
Vue.Utils = Utils
Vue.EventDispatch = EventDispatch
Vue.use(axios);


// 判断node进程，引入api地址前缀
axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = '/api/'  // api 即上面 vue.config.js 中配置的地址



import  order from './views/pages/order'
 Vue.component('my-component',{
  template:`<div>全局组件</div>`,
})
Vue.component('order',order)

// Vue.use(Home)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
