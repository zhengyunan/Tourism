<template>
    <div class="hoteldetails" style="background-color='red'">
        <header>           
            <div class="hotel_img">
               <wv-swipe class="swipe_s" :height="196" :autoplay="4000" :show-indicators="false">
                    <wv-swipe-item><img src="../../assets/images/hotelImg/2.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/hotelImg/3.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/hotelImg/4.jpg" alt=""></wv-swipe-item>
                    <wv-swipe-item><img src="../../assets/images/hotelImg/5.jpg" alt=""></wv-swipe-item>
                </wv-swipe>
            </div>
            <nav>
                <router-link to="/selectHotel">
                    <i class="hoteldetails_return"></i>
                </router-link>
               
            </nav>
        </header>
        <div class="mh-base-info">
            <div class="name"><h1>丽枫酒店(松原实际新城店)</h1></div>
            <div class="pinglun">
                <div class="pinglun_left">
                    <span>4.7</span>
                    <span>好极了</span>
                </div>
                <div class="pinglun_right">
                     <span>
                         距离火车站较近 好的交通 出门美食街 
                     </span>
                </div>
            </div>
        </div>
        <div class="hotel_type">
            <ul>
                <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
               <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="hotel_type_node">
                        <div class="li_left">
                            <img src="../../assets/images/hotelImg/3.jpg" alt="">
                        </div>
                        <div class="li_middle">
                            <h2>豪华间</h2>
                            <p>28㎡</p>
                        </div>
                        <div class="li_right">
                            <p>
                              <span>￥</span>
                              <span>345</span>
                              <span>起</span>
                            </p>
                            <span class="hotel_online_booking">在线预订</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
