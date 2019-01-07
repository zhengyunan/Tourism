<template>
    <div>
        <header>
            <div class="swipe">
                <wv-swipe class="swipe_s" :height="130" :autoplay="4000">
                    <wv-swipe-item style="background-color: #f44336">1</wv-swipe-item>
                    <wv-swipe-item style="background-color: #ffc107">2</wv-swipe-item>
                    <wv-swipe-item style="background-color: #03a9f4">3</wv-swipe-item>
                    <wv-swipe-item style="background-color: #f44336">1</wv-swipe-item>
                    <wv-swipe-item style="background-color: #ffc107">2</wv-swipe-item>
                    <wv-swipe-item style="background-color: #03a9f4">3</wv-swipe-item>
                    <wv-swipe-item style="background-color: #f44336">1</wv-swipe-item>
                    <wv-swipe-item style="background-color: #ffc107">2</wv-swipe-item>
                </wv-swipe>
            </div>
        </header>
        <div class="search fixed-header">
             <div class="city">
                 沭阳县
             </div>
             <div class="searchInput"></div>
             <div class="messageImg"></div>
        </div>
    </div>
</template>
