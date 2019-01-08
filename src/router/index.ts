import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
Vue.use(iView);
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
      component: () => import('@/views/Home/index.vue'),
    }
  ],
});

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  // this.$Loading.start();
  next();
})
router.afterEach(route => {
  // iView.LoadingBar.finish();
})


export default router;
