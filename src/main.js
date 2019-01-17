import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import "./assets/reset.css"
import './Element.js'

// 实现轮播
import { Swipe, SwipeItem } from 'we-vue'
Vue.use(Swipe).use(SwipeItem)
import { Group, Cell } from 'we-vue'
Vue.use(Group).use(Cell)
import { Popup } from 'we-vue'
Vue.use(Popup)
import { checklist } from 'we-vue'
Vue.use(checklist)
import { Slider } from 'we-vue'
Vue.use(Slider)
import { Button } from 'we-vue'
Vue.use(Button)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
