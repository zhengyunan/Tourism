<template>
    <div class="qn">
        <header>
            <div class="swipe">
                <wv-swipe class="swipe_s" :height="130" :autoplay="4000">
                    <wv-swipe-item><img src="../../assets/images/5.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/4.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/3.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/2.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/1.jpg" alt=""></wv-swipe-item> 
                </wv-swipe>
            </div>
            <div class="search fixed-header">
                <div class="city">
                    <router-link to="/">
                        <p>沭阳县</p>
                         
                            <img src="../../assets/images/button_triangle.png" alt="">
                    
                    </router-link>
                    
                </div>
                <div class="searchInput">
                    <div class="search_ioc">
                        <i>
                            <!-- 123 -->
                            <img src="../../assets/images/search_ioc.png" alt="">
                        </i>
                    </div>
                    <div class="search_text">
                        <input type="text" placeholder="首单最高减去两百">
                    </div>
                    <div class="search_rabot">
                        <img src="../../assets/images/robot.png" alt="">
                    </div>
                </div>
                <div class="messageImg">
                    <i></i>
                    <img src="../../assets/images/clock.png" alt="">
                </div>
            </div>
        </header>
        <div class="big_category">
           <div class="category_hotal small_category">
                <router-link to="/hotel" class="hotal_left total_left"><p>酒店</p></router-link>
                <div class="hotal_middle middle_coumn ">
                    <router-link to="" class="hotal_middle_top category_s noborder_top">特惠酒店</router-link>
                    <router-link to="" class="hotal_middle_bottom category_s">客栈</router-link>
                </div>
                <div class="hotal_right middle_coumn noborder_right ">
                    <router-link to="" class="hotal_middle_top category_s noborder_top">海外酒店</router-link>
                    <router-link to="" class="hotal_middle_bottom category_s">民宿</router-link>
                </div>
           </div>
           <div class="category_fligth small_category">
                <router-link to="" class="fligth_left total_left"><p>机票</p></router-link>
                <div class="fligth_middle middle_coumn">
                    <router-link to="" class="fligth_middle_top category_s noborder_top">低价机票</router-link>
                    <router-link to="" class="fligth_middle_bottom category_s">火车票</router-link>
                </div>
                <div class="fligth_right middle_coumn noborder_right">
                    <router-link to="" class="fligth_middle_top category_s noborder_top">汽车·船票</router-link>
                    <router-link to="" class="fligth_middle_bottom category_s">专车·自驾</router-link>
                </div>
           </div>
           <div class="category_holiday small_category">
                <router-link to="" class="holiday_left total_left"><p>度假</p></router-link>
                <div class="holiday_middle middle_coumn">
                    <router-link to="" class="holiday_middle_top category_s noborder_top">景点·门票</router-link>
                    <router-link to="" class="holiday_middle_bottom category_s">自由行</router-link>
                </div>
                <div class="holiday_right middle_coumn noborder_right">
                    <router-link to="" class="holiday_middle_top category_s noborder_top">旅行团购</router-link>
                    <router-link to="" class="holiday_middle_bottom category_s">周边·短途</router-link>
                </div>
           </div>
        </div>
        
        <div class="ioc_category">
            <div class="small_ioc group_tour ">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/group_tour.png" alt=""></i>
                <p>跟团游</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/onedayTrip.png" alt=""></i>
                <p>一日游</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/money.png" alt=""></i>
                <p>金融·优惠</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/credit_card.png" alt=""></i>
                <p>信用卡</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/borrow_money.png" alt=""></i>
                <p>借钱</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/transfer.png" alt=""></i>
                <p>出境游</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/visa_wifi.png" alt=""></i>
                <p>签证wifi</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/independent_travel.png" alt=""></i>
                <p>自由行</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/transfer.png" alt=""></i>
                <p>接送机</p>
            </div>
            <div class="small_ioc">
                <!-- <i>123</i> -->
                <i><img src="../../assets/images/more.png" alt=""></i>
                <p>更多</p>
            </div>
            
        </div>
    </div>
</template>
