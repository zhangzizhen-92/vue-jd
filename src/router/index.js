import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Loadding from '@/components/loading'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Loadding',
        component: Loadding
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }]
})