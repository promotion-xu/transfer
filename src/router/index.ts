import Vue from 'vue';
import Router from 'vue-router';
import Cache from '@/utils/cache';
Vue.use(Router);


const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login/index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      title: 'home',
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/charts',
      name: 'charts',
      title: 'charts',
      component: () => import('@/views/Charts/index.vue'),
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('@/views/Animate/index.vue'),
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth) { // 判断是否需要登录权限
//     if(Cache.getToken()) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         name: 'login'
//       })
//     }
//   } else {
//     next();
//   }
// })
router.afterEach((route: any) => {
  // iView.LoadingBar.finish();
})


export default router;