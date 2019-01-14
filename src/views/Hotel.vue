<template>
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
                            <el-col :span="13"><div class="grid-line bg-purple-light border_botttom">宿迁</div></el-col>
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
                                        <span class="date_xuanze date_month">01月</span>
                                        <span class="date_xuanze date_day">15日</span>
                                        <span class="check-in_time">明天</span>
                                        <span class="check-in check-in_time">入住</span>
                                    </li>
                                    <li>
                                        <span class="date_xuanze date_month">01月</span>
                                        <span class="date_xuanze date_day">16日</span>
                                        <span class="check-in_time">后天</span>
                                        <span class="check-in check-in_time">离店</span>
                                        <span class="check-in check-in_time">共1晚</span>
                                    </li>
                                </ul>
                                  <!-- <div class="date_top">
                                        df
                                  </div>
                                  <div class="tate_bottom">
                                      sdf
                                  </div> -->
                                  <!-- <el-row>1</el-row>
                                  <el-row>2</el-row> -->
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                          
                        </el-row>
                    </div>
                    <div class="search_hotal_name location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd">
                                搜索酒店名、地名、地标
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="hotal_price location">
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
                            搜索
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
                            <el-col :span="13"><div class="grid-line bg-purple-light border_botttom">北京</div></el-col>
                            <el-col :span="1"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                            <el-col :span="6"><div class="grid-dingwei bg-purple-light my_location border_botttom"><i class="dingwei"></i><p>我的位置</p></div></el-col>
                        </el-row>
                    </div>
                    <div class="date location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-date"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd_ul">
                                        <span class="date_xuanze date_month">01月</span>
                                        <span class="date_xuanze date_day">15日</span>
                                        <span class="check-in_time">明天</span>
                                        <span class="check-in check-in_time">入住</span>
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                          
                        </el-row>
                    </div>
                    <div class="search_hotal_name location">
                        <el-row :gutter="5" class="border_botttom">
                            <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-search"></i></div></el-col>
                            <el-col :span="18"><div class="grid-line bg-purple-light midd">
                                搜索酒店名、地名、地标
                                </div></el-col>
                            <el-col :span="2"><div class="grid-content bg-purple border_botttom"><i class="el-icon-arrow-right"></i></div></el-col>
                        </el-row>
                    </div>
                    <div class="hotal_price location" @click="popup">
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
                            搜索
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
        
        <wv-popup :visible.sync="popupVisible2" :height="300">
            <!-- <wv-group>
                <wv-checklist
                title="限制最多选两个"
                name=""
                :options="options"
                v-model="checkedItems2"
                :max="2"
                @change="onChange"
                />
            </wv-group> -->
        </wv-popup>
                   
    </div>
</template>
<style scoped>
    .bodycss{
        background-color: #edf2f5;
        height: 667px;
    }
</style>
<script>
export default {
    data(){
        return{
            popupVisible2: false,
            height:300,
            // onShow:true,
            // onHide:false
    //         options: [
    //                 {
    //                 label: '选项1',
    //                 value: 'value1'
    //                 },
    //                 {
    //                 label: '选项2',
    //                 value: 'value2'
    //                 },
    //                 {
    //                 label: '选项3',
    //                 value: 'value3'
    //                 },
    //                 {
    //                 label: '选项4（禁用）',
    //                 value: 'value4',
                    
    //                 }
    //             ],
    //   checkedItems2: ['value1', 'value2', 'value3'],
        }
    },
    methods:{
       popup(){
           this.popupVisible2 = !this.popupVisible2;
       },
    //     onChange () {
    //   console.log(val)
    // }
        
    }
}
</script>



