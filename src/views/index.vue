<template>
   <div>
       <router-view></router-view>
       <footer class="page-footer fixed-footer"> 
            <ul>
              <li :class="{'footer_active':$route.name=='index'}">
                 <router-link to="/">
                 <img v-if="$route.name=='index'" src="../assets/images/first1.png" alt="">
                 <img v-else  src="../assets/images/first2.png" alt="">
                      <p>首页</p>
                 </router-link>
              </li>
              <li :class="{'footer_active':$route.name=='order'}">
                 <router-link to="/order">
                 <img v-if="$route.name=='order'" src="../assets/images/order1.png" alt="">
                 <img v-else src="../assets/images/order2.png" alt="">
                       <p>订单</p>
                 </router-link>
              </li>
              <li :class="{'footer_active':$route.name=='customer'}">
                 <router-link  to="/customer">
                 <img v-if="$route.name=='customer'" src="../assets/images/serve1.png" alt="">
                 <img v-else src="../assets/images/serve2.png" alt="">
                       <p>客服</p>
                 </router-link>
              </li>
              <li :class="{'footer_active':$route.name=='my'}">
                 <router-link  to="/my">
                 <img v-if="$route.name=='my'" src="../assets/images/my1.png" alt="">
                 <img v-else src="../assets/images/my2.png" alt="">
                      <p>我的</p>
                 </router-link>
              </li>
            </ul>
       </footer>
   </div>
</template>
<style scoped>
@import '../assets/style.css';
</style>

<script>
export default {
     methods:{
           created(){
                 console.log($route.name)
           }
     }
}
</script>
