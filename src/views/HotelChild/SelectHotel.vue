<template>
    <div>
        <!-- 头部返回按钮start -->
        <header>
            <div class="headerleft">
                <router-link to="/hotel">
                   <i class="return_left"></i>
                </router-link>
                
            </div>
        </header>
        <!-- 头部返回按钮end -->
        <!-- hotel 列表 start -->

        <!-- hotel 列表 end -->
        <div class="hotelList_main">
            <ul class="list-id">
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                               <router-link to="/hoteldetails">
                                  <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                  <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                  <div class="hotel_score">
                                     <span class="Fraction">4.7</span>
                                     <span class="feel">棒极了</span>
                                  </div>
                                    <div class="hotel_ok_btn">立即确认</div>
                                    <div class="hotel_price">
                                        <div class="price_discount">
                                            <div class="diamond"></div>
                                            <p>¥262减¥11</p>
                                        </div>
                                    
                                        <div class="floor_price">
                                            <span class="biaozhi">¥</span>
                                            <span class="floor_price_num">126</span>
                                            <span class="floor_price_qi">起</span>
                                        </div>
                                  </div>
                               </router-link> 
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
                <li>
                    <el-row :gutter="8">
                        <el-col :span="8">
                           <div class="grid-content bg-purple">
                              <img src="../../assets/images/hotelImg/1.jpg" alt="">
                           </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <p class="hotel_name">郦枫酒店(松原世纪新城店)</p>
                                <p class="hotel_addr">松原宁江区世纪新城3期70号</p>
                                <div class="hotel_score">
                                    <span class="Fraction">4.7</span>
                                    <span class="feel">棒极了</span>
                                </div>
                                <div class="hotel_ok_btn">立即确认</div>
                                <div class="hotel_price">
                                    <div class="price_discount">
                                        <div class="diamond"></div>
                                        <p>¥262减¥11</p>
                                    </div>
                                   
                                    <div class="floor_price">
                                        <span class="biaozhi">¥</span>
                                        <span class="floor_price_num">126</span>
                                        <span class="floor_price_qi">起</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </div>
    </div>
</template>


