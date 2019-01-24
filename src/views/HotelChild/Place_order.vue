<template>
    <div class="place_order">
        <header>
            <div class="nav_place">
               <div class="header_left">
                    <router-link to="/hotel">
                    <i class="return_left"></i>
                    </router-link>
                </div>
                <div class="header_middle">
                    <p>丽枫酒店</p>
                </div>
            </div>
            
           <div class="place_order_detailed">
               <p class="tingliu_date">
                   <span>1月</span>
                   <span>23号</span>
                   <span>-</span>
                   <span>1月</span>
                   <span>24日</span>
               </p>
               <p class="tingliu_fangxing">
                   <span>标准间</span>
               </p>
               <p class="tingliu_fangxing">
                   <span>大床</span>&nbsp;&nbsp;
                   <span>可住两人</span>
               </p>
           </div>
        </header>
        <div class="ok_order">
            <ul>
                <li>
                    <div class="order_left">
                        <p>房间数</p>
                    </div>
                    <div class="order_right">
                        <input type="number" placeholder="1"><span>间</span>
                    </div>
                </li>
                <li>
                    <div class="order_left">
                        <p>入住人</p>
                    </div>
                    <div class="man_right">
                        <input type="text" placeholder="1间添1个联系人">
                    </div>
                </li>
                <li>
                     <div class="order_left">
                        <p>联系电话</p>
                    </div>
                    <div class="tel_right">
                        <input type="number" placeholder="用于接收预订信息">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
