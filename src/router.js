import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
          {
            path: '',
            name: 'index',
            component: () => import('./views/IndexChild/index.vue')
          },
         {
          path: '/trip',
          name: 'trip',
          component: () => import('./views/IndexChild/trip.vue')
        },
        {
          path: '/play',
          name: 'play',
          component: () => import('./views/IndexChild/play.vue')
        },
        {
          path: '/customer',
          name: 'customer',
          component: () => import('./views/IndexChild/customer.vue')
        },
        {
          path: '/my',
          name: 'my',
          component: () => import('./views/IndexChild/my.vue')
        },
      ]
    }
   
    
  ]
})
