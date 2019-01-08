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
        <div class="category">
           <div class="category_hotal">
                <div class="hotal_left">12</div>
                <div class="hotal_middle">34</div>
                <div class="hotal_right">56</div>
           </div>
        </div>
        
    </div>
</template>
