import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Login from './modules/login';
import Echarts from './modules/echarts';
import App from './modules/app';
const modules = {
  App,
  Login,
  Echarts,
};


const store = new Vuex.Store({
  modules,
})

export default store;