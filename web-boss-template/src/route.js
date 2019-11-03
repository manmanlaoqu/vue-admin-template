import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Login from './views/Login.vue'
import Main from './views/Main.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'HelloWorld', component: Main },
        { path: '/login', name: 'List', component: Login },
    ]
})