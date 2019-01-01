import Vue from 'vue'
import VueRouter from 'vue-router'
import {Plugin } from 'vue-fragment'
import routes from './routes'
import App from './App.vue'
Vue.use(Plugin)
Vue.use(VueRouter)

const router = new VueRouter ({
    mode:'history',
    routes
})

new Vue({
    el:'#app',
    router,
    render: h => h(App)
})

