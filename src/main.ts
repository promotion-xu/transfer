import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';

// use project UI  "iview"
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './style/index.less';  // set project theme
Vue.use(iView);

import './lib/rem';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
