import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
Vue.use(iView);
Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      // redirect: '/login',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login/index.vue'),
    },
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
