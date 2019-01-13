import axios from 'axios';
import Cache from '@/utils/cache';
import { Loading, Message, MessageBox } from 'element-ui';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';
// http 拦截器
let loadinginstance: any;
axios.interceptors.request.use((config: any) => {
  loadinginstance = Loading.service({ fullscreen: true})
  config.headers.authorization = `Bearer ${Cache.getToken()}`
  return config;
}, (error: any) => {
  loadinginstance.close();
  Message.error('加载超时')
  return Promise.reject(error);
})

// http响应拦截器
axios.interceptors.response.use((data: any) => {
  loadinginstance.close();
  return data;
}, (error: any) => {
  if(error.response) {
    switch(error.response.status) {
      case 401:
      MessageBox.alert('当前会话已过期，请重新登录', {
        confirmButtonText: '确定',
        center: true,
        roundButton: true,
        confirmButtonClass: 'expired-btn',
      }).then(_ => {
        window.location.href = '/';
        Cache.removeToken();
      })
    }
  }
  return Promise.reject(error);
})
export default axios;



