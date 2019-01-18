<template>
    <div class="hoteldetails">
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
    </div>
</template>
