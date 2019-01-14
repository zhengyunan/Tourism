import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import "./assets/reset.css"
import './Element.js'
// 实现轮播
import { Swipe, SwipeItem ,Group ,Cell} from 'we-vue'

Vue.use(Swipe).use(SwipeItem)
import { Popup } from 'we-vue'
Vue.component(Popup.name, Popup)
Vue.component(Group.name, Group)
Vue.component(Cell.name, Cell)
// import { CheckList } from 'we-vue'
// Vue.use(CheckList)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
