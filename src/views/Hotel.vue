<template>
    <div>
        <div class="bodycss">
        <header>
            <div class="hotel_topImg">
               <router-link class="left_topimg" to="/"><i class="return_ioc left_ioc"></i></router-link>
               <router-link class="middle_topimg" to=""><i class="ioc middle_ioc"></i><p>代金卷</p></router-link>
               <router-link class="right_topimg" to=""><i class="ioc right_ico"></i><p>附近酒店</p></router-link>
            </div> 
        </header>
        <div class="line-tab-box">
            <el-tabs>
                <el-tab-pane label="全日房" class="allday">
                    <div class="location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-location-outline"></i></div></el-col>
                            <el-col :span="13">
                                <div class="grid-line bg-purple-light border_botttom search_input">
                                    <input type="text" value="宿迁">
                                </div>
                            </el-col>
                            <el-col :span="1"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                            <el-col :span="6"><div class="grid-dingwei bg-purple-light my_location border_botttom"><i class="dingwei"></i><p>我的位置</p></div></el-col>
                        </el-row>
                    </div>
                    <div class="date location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-date"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd_ul">
                                <ul>
                                    <li>
                                        <!-- <span class="date_xuanze date_month">01月</span>
                                        <span class="date_xuanze date_day">15日</span>
                                        <span class="check-in_time">明天</span>
                                        <span class="check-in check-in_time">入住</span> -->
                                        <el-date-picker
                                                v-model="create_start_date"
                                                type="date"
                                                :picker-options="pickerBeginDateBefore"
                                                format="yyyy-MM-dd"
                                                placeholder="">
                                        </el-date-picker>
                                        

                                    </li>
                                    <li>
                                        <!-- <span class="date_xuanze date_month">01月</span>
                                        <span class="date_xuanze date_day">16日</span>
                                        <span class="check-in_time">后天</span>
                                        <span class="check-in check-in_time">离店</span>
                                        <span class="check-in check-in_time">共1晚</span> -->
                                        <el-date-picker
                                                v-model="create_end_date"
                                                type="date"
                                                format="yyyy-MM-dd"
                                                :picker-options="pickerBeginDateAfter"
                                                placeholder="">
                                        </el-date-picker>
                                    </li>
                                </ul>
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                          
                        </el-row>
                    </div>
                    <div class="search_hotal_name location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd search_input">
                                 <input type="text" placeholder="搜索酒店名、地名、地标">
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="hotal_price location" @click="popup_allday">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd">
                                不限星级价格
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="search_btn location">
                        <div class="btn_button">
                            <router-link to="/selectHotel">搜索</router-link>
                        </div>
                    </div>
                    <div class="other-link">
                        <el-row>
                            <el-col :span="6"><div class="grid-content bg-purple other-link_css">最近浏览</div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light other-link_css">发现酒店</div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple other-link_css">今日特惠</div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light other-link_css last_link">我的订单</div></el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                
                <el-tab-pane label="钟点房" class="clock">
                    <div class="location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-location-outline"></i></div></el-col>
                            <el-col :span="13"><div class="grid-line bg-purple-light border_botttom search_input"> <input type="text" value="北京"></div></el-col>
                            <el-col :span="1"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                            <el-col :span="6"><div class="grid-dingwei bg-purple-light my_location border_botttom"><i class="dingwei"></i><p>我的位置</p></div></el-col>
                        </el-row>
                    </div>
                    <div class="date location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-date"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd_ul">
                                        <el-date-picker
                                                v-model="clock_date"
                                                type="date"
                                                :picker-options="pickerBeginDateBefore"
                                                format="yyyy-MM-dd"
                                                placeholder="">
                                        </el-date-picker>
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                          
                        </el-row>
                    </div>
                    <div class="search_hotal_name location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd search_input">
                                 <input type="text" placeholder="搜索酒店名、地名、地标">
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="hotal_price location" @click="popup_click">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd">
                                不限星级价格
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="search_btn location">
                        <div class="btn_button">
                            <router-link to="/selectHotel">搜索</router-link>
                        </div>
                    </div>
                    <div class="other-link">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple other-link_css">最近浏览</div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light other-link_css">我的订单</div></el-col>
                        </el-row>
                    </div>
                
                    
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- 弹出框全日 -->
         <wv-popup :visible.sync="popupVisible1" :height="400">
            <div class="start">
                <wv-button type="default" :id="k==startIndex?'border_start':''" :mini="true" v-for="(v,k) in starClass" @click="allday_startClick(v,k)" :key="k">{{v}}</wv-button>
                
            </div>
            <div class="search_price">
               <p>价格:</p><el-slider
                v-model="value1"
                range
                :step="20"
                :show-stops="true"
                :show-input="true"
                :max="500">
                </el-slider>
            </div>
        </wv-popup>
        <!-- 全日弹出框end -->
        <!-- 钟点房弹出框 -->
        <wv-popup :visible.sync="popupVisible2" :height="400">
            <div class="start">
                <wv-button type="default" :id="k==startIndex?'border_start':''" :mini="true" v-for="(v,k) in starClass" @click="clock_startClick(v,k)" :key="k">{{v}}</wv-button>
                
            </div>
            <div class="clock_time">
                <wv-button type="default" :id="k==timeIndex?'border_start':''" :mini="true" v-for="(v,k) in timeClass"  @click="clock_timeClick(v,k)" :key="k">{{v}}</wv-button>
            </div>
            <div class="search_price">
               <p>价格:</p><el-slider
                v-model="value2"
                range
                :step="20"
                :show-stops="true"
                :show-input="true"
                :max="100">
                </el-slider>
            </div>
        </wv-popup>
        <!-- 钟点房弹出框end -->

       
    </div>
    </div>
</template>
<style scoped>
@import "../assets/hotelSearch.css";
</style>
<script>
export default {
  data() {
    return {
      percent2: 1,

      popupVisible2: false, //钟点
      popupVisible1: false, //全日
      starClass: ["经济", "一星", "两星", "三星", "四星", "五星"],
      timeClass: ["<三小时", "三小时", "四小时", ">四小时"],
      startIndex: 0,
      timeIndex: 0,
      value1: [0, 100],
      value2: [0, 50],
      create_start_date: "",
      create_end_date: "",
      clock_date: "",
      newdate: new Date().getTime(),
      pickerBeginDateBefore: {
        disabledDate: time => {
          let beginDateVal = this.create_end_date;
          if (beginDateVal) {
            return time.getTime() > beginDateVal;
          }
        }
      },
      pickerBeginDateAfter: {
        disabledDate: time => {
          let beginDateVal = this.create_start_date;
          if (beginDateVal) {
            return time.getTime() < beginDateVal;
          }
        }
      }
    };
  },
  methods: {
    popup_click() {
      this.popupVisible2 = !this.popupVisible2;
    },
    clock_startClick(item, k) {
      this.startIndex = k;
    },
    clock_timeClick(item, k) {
      this.timeIndex = k;
    },

    popup_allday() {
      this.popupVisible1 = !this.popupVisible1;
    },
    allday_startClick(item, k) {
      this.startIndex = k;
    },
    allday_timeClick(item, k) {
      this.timeIndex = k;
    }
  }
};
</script>



