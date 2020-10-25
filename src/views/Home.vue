<template>
    <div>
        <div class="main">
            <mt-tab-container v-model="selected" swipeable>
                <!-- 轮播图开始 -->
                <mt-tab-container-item id="1">
                    <div class="swipe">
                        <mt-swipe
                            :auto='5000'
                            :speed='300'
                            :continuous='true'>
                         <mt-swipe-item><img src="../assets/imgs/02.jpg" ></mt-swipe-item>
                         <mt-swipe-item><img src="../assets/imgs/03.jpg" ></mt-swipe-item>
                         <mt-swipe-item><img src="../assets/imgs/04.jpg" ></mt-swipe-item>
                        </mt-swipe>
                     </div>
                      <!-- 轮播图结束-->  
                         <!-- 开始查找房源模块 -->
                          <div class="m1">   
                              <div>
                                  <div class="m2">目的地/附近</div>
                                <div class="m3">
                                    <input type="text" placeholder="请输入位置">
                                  <span>
                                    <img src="../assets/imgs/附近.png">
                                      <span>我的附近</span>
                                    </span>
                                    <div></div>
                                </div> 

                              </div>
                          <div class="m4">
                                  <div>
                                      <input type="text" placeholder="搜索民宿/地点/关键词" autocomplete="off">
                                  </div>
                                
                                <button disabled="disabled">查找房源</button>

                            </div>
                          <div class="m3">
                              <van-cell title="选择入住时间" :value="text" @click="show = true" />
                            <van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
                                </div>
                          <div class="m5">
                              <div><img src="../assets/imgs/时间.png" ><span>24小时客服</span></div>
                              <div><img src="../assets/imgs/房源.png" ><span>房源房东实名认证</span></div>
                              
                          </div>

                      </div>
                          <!-- 查找房源模块结束 -->
                          <!--顶部导航开始  -->
                      <div class="m2">
                        <mt-navbar>
                          <mt-tab-item>
                              公寓
                          <img src="../assets/imgs/学校公寓.png"  slot="icon" >
                          </mt-tab-item>
                          <mt-tab-item>
                              两房
                          <img src="../assets/imgs/两房.png"  slot="icon" >

                          </mt-tab-item>
                          <mt-tab-item>三房
                          <img src="../assets/imgs/三房.png" slot="icon" >  
                          </mt-tab-item>
                          <mt-tab-item>
                              四房以上
                          <img src="../assets/imgs/四房以上.png" slot="icon" >  
                          </mt-tab-item>
                          <mt-tab-item>
                              酒店公寓
                          <img src="../assets/imgs/酒店公寓.png" slot="icon" >  
                              
                          </mt-tab-item>
                            </mt-navbar>
                          <!-- 导航2 -->
                          <mt-navbar>
                          <mt-tab-item>
                              农家乐
                          <img src="../assets/imgs/农家乐.png"  slot="icon" >
                          </mt-tab-item>
                          <mt-tab-item>
                              别墅
                          <img src="../assets/imgs/别墅.png"  slot="icon" >
                          </mt-tab-item>
                          <mt-tab-item>
                              客栈
                          <img src="../assets/imgs/客栈.png" slot="icon" >  
                          </mt-tab-item>
                          <mt-tab-item>
                            四合院
                          <img src="../assets/imgs/四合院.png" slot="icon" >  
                          </mt-tab-item>
                          <mt-tab-item>
                              酒店
                          <img src="../assets/imgs/酒店.png" slot="icon" >  
                          </mt-tab-item>
                          </mt-navbar>
                      </div>
                          <!--顶部导航结束 -->
                      <!--中间部分开始  -->
                              <div class="inmainwrapper">
                                    <img src="../assets/imgs/k.jpg" > 
                                  
                                  <!--猜你喜欢结束 -->
                                  <div class="like">
                                    <h1>猜你喜欢</h1>
                                    <h6>附近更多优质房源尽在途乐</h6>
                                    <div>
                                        <button disabled="disabled">
                                            <img src="../assets/imgs/火.png" >
                                            免费房源</button>
                                        <button disabled="disabled">
                                            <img src="../assets/imgs/火.png" >
                                            连住优惠</button>
                                        <button disabled="disabled">新房特惠</button>
                                        <button disabled="disabled">特色名宿</button>
                                        <button disabled="disabled">整套出租</button>
                                        <button disabled="disabled">独立单间</button>
                                    </div>
                                  </div>
                            </div>
                          <!--猜你喜欢结束 -->    
                                  <!-- 房源开始-->
                            
                            <div class="house">
                                <div class=" house1">
                                  <img src="../assets/imgs/house/01.jpg" alt="">
                                   <p>市中心湖景地铁口近昙华林</p>
                                    <p> 整套·1居2床·可住2人</p>
                                    <span>¥638.00</span>
                                    <van-rate v-model="value1" />
                                </div>
                                <div class="house1">
                                    <img src="../assets/imgs/house/01.jpg" alt="">
                                    <p>市中心湖景地铁口近昙华林</p>
                                    <p> 整套·1居2床·可住2人</p>
                                    <span>¥638.00</span>
                                    <van-rate v-model="value1" />
                                </div> 
                            <div class="house1">
                                    <img src="../assets/imgs/house/01.jpg" alt="">
                                    <p>市中心湖景地铁口近昙华林</p>
                                    <p > 整套·1居2床·可住2人</p>
                                    <span>¥638.00</span>
                                    <van-rate v-model="value1" />
                            </div> 
                                    
                                <div class="house1">
                                    <img src="../assets/imgs/house/01.jpg" alt="">
                                    <p>市中心湖景地铁口近昙华林</p>
                                    <p> 整套·1居2床·可住2人</p>
                                    <span>¥638.00</span>
                                    <van-rate v-model="value1" />
                                </div>
                            </div>
                    </mt-tab-container-item>
                  <!-- 收藏 -->
                <mt-tab-container-item id="2">
                        <van-tabs  v-model="active" fixed >
                            <van-tab id="1" title="房屋"></van-tab>
                            <van-tab id="2" title="房东"></van-tab>
                        </van-tabs>
                            <div class="s1">
                            <div>全部城市(0)</div><span></span>
                              
                            </div>
                        <img class="imgs1" src="../assets/imgs/礼物.png" >
                  </mt-tab-container-item>
                    <!-- 发现 -->
                <mt-tab-container-item id="3">
                      <div class="fx">
                        <!-- 顶部导航 -->
                         <mt-navbar fixed >
                                <div class="fx1">发现</div>
                                <van-search v-model="value" placeholder="请输入搜索关键词" />
                         </mt-navbar>
                         <!-- 轮播图 -->
                      <div class="swipe1">
                        <mt-swipe
                            :auto='5000'
                            :speed='300'
                            :continuous='true'>
                             <mt-swipe-item><img src="../assets/fx/01.jpg" class="swipe-img" ></mt-swipe-item>
                              <mt-swipe-item><img src="../assets/fx/02.jpg" class="swipe-img"></mt-swipe-item>
                             <mt-swipe-item><img src="../assets/fx/03.jpg" class="swipe-img"></mt-swipe-item>
                        </mt-swipe>
                     </div>
                            <div class="f1">
                              <mt-navbar v-model="fselected">
                                <mt-tab-item id="f1"><div>精选</div></mt-tab-item>
                                <mt-tab-item id="f2">收藏热榜</mt-tab-item>
                                <mt-tab-item id="f3">民宿片场</mt-tab-item>
                                <mt-tab-item id="f4">亲子好房</mt-tab-item>
                                <mt-tab-item id="f5">出去嗨</mt-tab-item>
                              </mt-navbar>
                              <mt-tab-container v-model="fselected">
                                <!-- 精选 -->
                                <mt-tab-container-item id="f1">
                                  <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/01.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" >
                                          </div>
                                        </div>
                                      </div>
                                             <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/01.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                         
                                        </div>
                                      </div>
                                        <div class="j1">
                                          <img src="../assets/imgs/recommend/01.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              
                                </mt-tab-container-item>
                                <!-- 收藏热榜 -->
                                <mt-tab-container-item id="f2">
                                       <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/02.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                             <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/02.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                         
                                        </div>
                                      </div>
                                        <div class="j1">
                                          <img src="../assets/imgs/recommend/01.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </mt-tab-container-item>
                                <!-- 民宿偏差 -->
                                <mt-tab-container-item id="f3">
                                   <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/03.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                             <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/03.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                         
                                        </div>
                                      </div>
                                        <div class="j1">
                                          <img src="../assets/imgs/recommend/03.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </mt-tab-container-item>
                                <!-- 亲自好房 -->
                                <mt-tab-container-item id="f4">
                                   <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/04.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                             <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/04.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                         
                                        </div>
                                      </div>
                                        <div class="j1">
                                          <img src="../assets/imgs/recommend/04.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </mt-tab-container-item>
                                <!-- 出去嗨 -->
                                <mt-tab-container-item id="f5">
                                   <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/05.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                             <div class="jx">
                                      <div class="j1">
                                          <img src="../assets/imgs/recommend/05.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                         
                                        </div>
                                      </div>
                                        <div class="j1">
                                          <img src="../assets/imgs/recommend/05.jpg" >
                                          <div class="jtext">民宿是指利用自用住宅空闲房间，结合当地人文、自然景观、生态、环境资源及农林渔牧生产活动，为外出郊游或远行的旅客提供个性化住宿场所。除了一般常见的饭店以及旅社之外，其它可以提供旅客住宿的地方，</div>
                                        <div class="j1-1">
                                          <div>
                                            <img src="../assets/imgs/recommend/头像.png" >
                                            <span>我是谁</span>
                                          </div>
                                          <div><img src="../assets/imgs/recommend/点赞.png" class="j1-1-img1" ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </mt-tab-container-item>
                              </mt-tab-container>
                            </div>
                     </div>       
                    </mt-tab-container-item>
                  
                    <!-- 消息 -->
                
                <mt-tab-container-item id="4">
                            <mt-navbar fixed >
                                <mt-tab-item id="x2">消息中心</mt-tab-item>
                             </mt-navbar>
                        <div class="x1"></div>
                        <div class="x2">
                            <img src="../assets/imgs/通知.png">
                          系统消息
                           <div class="x3"></div>
                        <div>
                            <img src="../assets/imgs/礼物1.png" >
                            优惠促销
                             <div class="x3"></div>
                            
                                <!-- 优惠券单元格 -->
                                  <van-coupon-cell
                                    :coupons="coupons"
                                    :chosen-coupon="chosenCoupon"
                                    @click="showList = false"
                                  />

                                  <!-- 优惠券列表 -->
                                  <van-popup v-model="showList" position="bottom">
                                    <van-coupon-list
                                      :coupons="coupons"
                                      :chosen-coupon="chosenCoupon"
                                      :disabled-coupons="disabledCoupons"
                                      @change="onChange"
                                      @exchange="onExchange"
                                    />
                                  </van-popup>
                        </div>
                        
                        </div>
                       
                    </mt-tab-container-item>
                    <!-- 我的 -->
                <mt-tab-container-item id="5">
                        <div class="me1">
                            
                            <div>
                                <div>
                                    <img src="../assets/imgs/切换.png" >
                                     <span>切换为房东</span>
                                     <div class="me2">
                                    <img src="../assets/imgs/皮肤.png" alt="">
                                    <img src="../assets/imgs/设置.png" alt="">
                                </div>
                                <div class="me3">
                                    <img src="../assets/imgs/头像.png" alt="">
                                    <span>
                                      <router-link to="/login">登录</router-link>/
                                      <router-link to="/register">注册</router-link>
                                      
                                       </span>
                                </div>
                            </div>
                                
                            </div>
                            <img src="../assets/imgs/me.jpg" >
                        </div>

                        <div class="me4">
                            <span>我的订单</span>
                            <div><router-link to="">查看全部</router-link>&gt;</div>
                           
                        </div>
                        <div class="me5"></div>
                        <div>
                            <div class="imgs2">
                               <div>
                                    <img src="../assets/imgs/我的红包.png" >
                                    <div>我的红包</div>
                                   
                                </div>
                                <div>
                                    <img src="../assets/imgs/常用信息.png" >
                                    <div>常用信息</div>
                                </div>

                                <div>
                                    <img src="../assets/imgs/在线客服.png" >
                                    <div>在线客服</div>
                                </div> 
                                
                               <div >
                                    <img src="../assets/imgs/邀请好友.png" >
                                    <div>邀请好友</div>
                                </div>
                                <div>
                                    <img src="../assets/imgs/反馈意见.png" >
                                    <div>反馈意见</div>
                                </div>
                                <div>
                                    <img src="../assets/imgs/关于.png" >
                                    <div>关于民宿</div>
                                </div> 
                                <div>
                                    <img src="../assets/imgs/规则.png" >
                                    <div>规则</div>
                                </div>
                                <div>
                                    <img src="../assets/imgs/加盟.png" >
                                    <div>我要加盟</div>
                                </div> 
                                 <div>
                                    <img src="../assets/imgs/基础管理.png" >
                                    <div>内容管理</div>
                                </div>                            
                            </div>
                        </div>
                    </mt-tab-container-item>

      </mt-tab-container>
 
                <!-- 房源结束-->

                 <!--中间部分结束  -->
       
            </div>
        <!-- 底部选项卡开始 -->
            <div class="tabbar">
             <mt-tabbar v-model="tabbar" fixed>
                 <mt-tab-item id="index">
                     首页
                     <img src="../assets/imgs/首页1.png" slot="icon" v-if="tabbar == 'index'">
                     <img src="../assets/imgs/首页.png" slot="icon" v-else>
                 </mt-tab-item>
                 <mt-tab-item id="collect">
                     收藏
                     <img src="../assets/imgs/收藏1.png" slot="icon" v-if="tabbar == 'collect' ">
                     <img src="../assets/imgs/收藏.png" slot="icon" v-else>
                 </mt-tab-item>
                    <mt-tab-item id="discover">
                    发现
                     <img src="../assets/imgs/发现1.png" slot="icon" v-if="tabbar == 'discover' " >
                     <img src="../assets/imgs/发现.png"  slot="icon" v-else>
                 </mt-tab-item>
                  <mt-tab-item id="information">
                    消息
                     <img src="../assets/imgs/消息1.png"  slot="icon" v-if="tabbar == 'information' " >
                     <img src="../assets/imgs/消息.png" slot="icon" v-else>
                 </mt-tab-item>
                 <mt-tab-item id="me">
                    我的
                     <img src="../assets/imgs/我的1.png"  slot="icon" v-if="tabbar == 'me' " >
                     <img src="../assets/imgs/我的.png"  slot="icon" v-else>
                 </mt-tab-item>
                 
             </mt-tabbar>
         </div>
         <!-- 底部选项卡结束 -->
    </div>
</template>

<style scoped>
.swipe {
  position: relative;
  height: 300px;
  margin-bottom: 80px;
}
.m1 {
  margin-top: -250px;
  width: 300px;
  height: 200px;
  background-color: rgba(245, 244, 244, 0.6);
  border: 1px solid #fff;
  border-radius: 10px;
  position: absolute;
  margin-left: 35px;
  box-shadow: 1px 1px 1px #000;
  box-shadow: 0 0 5px #fff;
}
.m1 > div {
  margin: 15px;
}
.m2 {
  font-size: 10px;
  color: #000;
  margin: 10px 0px 10px 10px;
}
.m3 {
  margin: 10px 0px 10px 0px;
}
.m3 > div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 10px;
}
.m3 > span > span {
  font-size: 12px;
}
.m3 > input {
  border-radius: 10px;
  border: 0px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
.m4 > input {
  font-size: 12px;
}
.m4 > div > input {
  border: 0px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
.m4 > div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 10px;
}

.m4 > button {
  margin: 10px;
  padding: 8px 80px 8px 80px;
  border-radius: 10px;
  background-color: yellow;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 18px;
}
.m5 {
  display: flex;
}
.m5 > div {
  margin-left: 20px;
}
.m5 > div > span {
  font-size: 8px;
  color: gray;
}
.inmainwrapper {
  margin: 20px 0px 0px 22px;
}
.inmainwrapper:first-child {
  border-radius: 15px;
  margin-bottom: 10px;
}
.inmainwrapper > img {
  border-radius: 10px;
  margin-left: 5px;
}
.tabbar {
  height: 80px;
}

.like > h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
.like > h6 {
  font-size: 10px;
  margin: 10px;
}
.like button {
  /* padding: 3px; */
  font-size: 15px;
  margin: 0px 10px 5px 0px;
  background-color: #fff;
  border-radius: 5px;
}
.house {
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
}
.house1 {
  width: 170px;
  height: 220px;
  background-color: #e8e8e8;
  margin: 10px 10px 10px 8px;
}
.house1>span{color: orange;margin: 8px;}
.house1>p{font-size: 12px;margin: 10px}
.house img {
  margin: 10px;
  border-radius: 10px;
}

.s1 {
  margin: 30px 10px 0px 10px;
  font-weight: bold;
  position: relative;
}
.s1 > span {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid orange;
  margin-left: 100px;
}
.imgs1 {
  margin: 40% 0px 0px 120px;
}
.m1e > img {
  position: relative;
}
.me1 > div {
  margin: 10px 20px 0px 20px;
  position: absolute;
}

.me1 > div > div > span {
  margin-left: 10px;
  font-size: 14px;
  color: #e8e8e8;
}
.me2 {
  float: right;
  margin: -26px 0px 0px 200px;
}
.me2 > img {
  margin: 0px 10px 10px 10px;
}
.me3 {
  margin-top: 40px;
}
.me3 > span{color: #fff}
.me3 > span>a {
  color: #fff;
  margin-left: 20px;
}
.me4 {
  margin: 20px 0px 10px 20px;
  font-size: 20px;
  font-weight: bold;
}

.me4 > div > a {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
  font-size: 16px;
}
.me4 > div {
  float: right;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.3);
}
.me5 {
  width: 3100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.05);
}
.imgs2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imgs2 > div {
  margin: 30px 30px;
}
.imgs2 > div > div {
  margin-top: 10px;
  font-size: 10px;
  text-align: center;
}

.x1 {
  width: 100%;
  height: 10px;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.05);
}

.x2 > img {
  margin: 10px 10px 20px 10px;
}
.x2 > div > img {
  margin: 10px 10px 20px 10px;
}
.x3 {
  width: 100%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.05);
}
.fx{
  padding: 20px; 
}
.fx1{
  font-size: 26px;
  margin: 20px 0px 20px 10px;
}
.f1{
  border-bottom: 3px solid #fff;
  }
.f1>span{
    font-size: 15px;
    margin: -20px 15px;
    
}
.swipe1{
  margin: 10px 10px 0px 10px;
  position: relative;
  height: 200px;
  margin-bottom: 80px;
  box-shadow:2px 10px 8px rgb(163, 157, 157); 
}
.jx{
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
 
}
.j1{
  padding: 10px;
  margin: 10px 10px 0px 15px;
  width: 300px;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  
}
.j1>img{margin-bottom: 20px;}

.j1-1{display:flex;justify-content:space-between;margin: 10px;}

.j1-1>div>span{margin-left: 10px}
.jtext{
  font-family: cursive;
  width: 300px;
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
}
</style>
<script>
const coupon = {
  id: 1, // 优惠券id
  discount: 0, // 折扣券 折值 整数 为0不显示折
  denominations: 2000, // 优惠券金额 单位分
  originCondition: 5000, // 满减规则金额 单位分 为0显示无门槛
  value: 12, // 折扣券优惠金额，单位分
  name: '新人大礼包', // 优惠券名称
  description: '喜欢你就用', // 描述信息
  reason: '订单未满200元', // 不可用原因，优惠券不可用时展示
  startAt: parseInt(1556337595530 / 1000), // 卡有效开始时间 (时间戳, 单位秒)
  endAt: parseInt(1559337595530 / 1000) // 卡失效日期 (时间戳, 单位秒)
}
export default {
  
  data() {
    return {
      selected: "1",
      tabbar: "index",
      active: "1",
      fselected:"f1",
      text: '',
      show: false,
      value:'',
      value1: 5,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:''
    };
  },
  
   methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
      onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
watch: {
    tabbar() {
      if (this.tabbar == "index") {
        this.selected = "1";
      } else if (this.tabbar == "collect") {
        this.selected = "2";
      } else if (this.tabbar == "discover") {
        this.selected = "3";
      } else if (this.tabbar == "information") {
        this.selected = "4";
      } else if (this.tabbar == "me") {
        this.selected = "5";
      }
    }
  }
};
</script>

