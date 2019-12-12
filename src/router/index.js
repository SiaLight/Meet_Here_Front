import Vue from 'vue'
import Router from 'vue-router'
import  Hello from '../components/HelloWorld.vue'
import  Index from '../views/index/index.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
    routers:[
        {
            path: "/",
            name: "HelloWorld",
            component: Hello
        },
        {
            path: "/index",
            name: "index",
            component: Index,
            children:[
                {
                    path: '/homePage',
                    name:'homePage',
                    component: () => import( '../views/homePage/index')
                },
                {
                    path: '/appointment',
                    name:'appointment',
                    component: () => import( '../views/appointment/index')
                },
                {
                    path: '/info',
                    name:'info',
                    component: () => import('../views/info/index')
                },

            ]
        }

    ]


})