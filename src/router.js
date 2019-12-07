import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routers:[
        {
            path: '/',
            redirect: '/homePage'
        },
        {
            path: '/homePage',
            name:'/homePage',
            component: () => import(/* webpackChunkName: "login" */ '@/views/homePage')
        },
        {
            path: '*',
            name: 'not found',
            // for the unknown page
            redirect: '/'
        }
    ]


})