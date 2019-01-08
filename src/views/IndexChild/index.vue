<template>
    <div>
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
                <div class="hotal_left total_left"><p>酒店</p></div>
                <div class="hotal_middle middle_coumn">
                    <div class="hotal_middle_top category_s">特惠酒店</div>
                    <div class="hotal_middle_bottom category_s">客栈</div>
                </div>
                <div class="hotal_right middle_coumn">
                    <div class="hotal_middle_top category_s">海外酒店</div>
                    <div class="hotal_middle_bottom category_s">民宿</div>
                </div>
           </div>
           <div class="category_fligth small_category">
                <div class="fligth_left total_left"><p>机票</p></div>
                <div class="fligth_middle middle_coumn">
                    <div class="fligth_middle_top category_s">低价机票</div>
                    <div class="fligth_middle_bottom category_s">火车票</div>
                </div>
                <div class="fligth_right middle_coumn">
                    <div class="fligth_middle_top category_s">汽车·船票</div>
                    <div class="fligth_middle_bottom category_s">专车·自驾</div>
                </div>
           </div>
           <div class="category_holiday small_category">
                <div class="holiday_left total_left"><p>度假</p></div>
                <div class="holiday_middle middle_coumn">
                    <div class="holiday_middle_top category_s">景点·门票</div>
                    <div class="holiday_middle_bottom category_s">自由行</div>
                </div>
                <div class="holiday_right middle_coumn">
                    <div class="holiday_middle_top category_s">旅行团购</div>
                    <div class="holiday_middle_bottom category_s">周边·短途</div>
                </div>
           </div>
           <div class="category_money">
               
           </div>
        </div>
        
    </div>
</template>
