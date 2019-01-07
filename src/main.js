import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'

// 实现轮播
import { Swipe, SwipeItem } from 'we-vue'
Vue.use(Swipe).use(SwipeItem)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
