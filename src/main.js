import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css';


import Vant from 'vant'
import { CouponCell, CouponList } from 'vant';
import 'vant/lib/index.css'
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Vant);
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
