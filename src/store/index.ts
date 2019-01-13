import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Login from './modules/login';
const modules = {
  Login,
};


const store = new Vuex.Store({
  modules,
})

export default store;