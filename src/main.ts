import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';

// use project UI  "iview"
import './style/index.scss';  // set project theme

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './lib/rem';

// animate.css 
import 'animate.css';
// iconfont
import './assets/font_1013157_prd0od18vv/iconfont.css';
import './assets/font_1013157_prd0od18vv/iconfont.js'

import './style/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
