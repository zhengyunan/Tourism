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
          path: '/order',
          name: 'order',
          component: () => import('./views/IndexChild/order.vue')
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
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: () => import('./views/Hotel.vue')
    }
   
    
  ]
})
