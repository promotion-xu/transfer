<template>
  <div id="app">
    <div class="components">
      <!-- 公共的侧边栏 不是全屏页面则显示sideBar-->
      <div v-if="config.fullPages.indexOf(this.$route.path) > -1" class="app-one">
        <router-view/>
      </div>
      <!-- 主体部分 -->
      <div v-else class="components-main clearfix">
        <div class="components-sidebar fl">
          <Sidebar></Sidebar>
        </div>
        <div class="components-content fl">
          <Header/>
          <div class="show">
            <router-view/>
          </div>
          <app-progress/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import { Component } from 'vue-property-decorator';
import config from '../config.js';
import Sidebar from '@/components/sideBar.vue';
import Header from '@/components/Header.vue';
import AppProgress from '@/components/ProgressBar/index.vue';
@Component({
  components: {
    AppProgress,
    Sidebar,
    Header,
  },
})
export default class App extends Vue {
  config = config;
  created() {
    // 跳转前显示进度条
    this.$router.beforeEach((to, from, next) => {
        this.$store.commit('SET_PROGRESS_STATUS', 'start');
        // 需要给一点延时，不然跳转太快进度条出不来
        setTimeout(() => {
            next();
        }, 20);
    });
    // 跳转结束后隐藏
    this.$router.afterEach((to, from) => {
        this.$store.commit('SET_PROGRESS_STATUS', 'finish');
    });
  }
  mounted() {
    this.$store.commit('SET_PROGRESS_STATUS', 'finish')
  }
}
</script>

<style lang='scss'>
@import '@/style/index.scss';
#app {
  width: 100%;
  height: 100%;

  overflow: hidden;
  .components {
    width: 100%;
    height: 100%;
    .app-one {
      width: 100%;
      height: 100%;
    }
    &-main {
      height: 100%;
    }
    &-sidebar {
      width: 2.4rem;
      height: 100%;
    }
    &-content {
      padding-top: 0.2rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      // width: 80%;
      width: calc(100vw - 240px);
      height: 100%;
      .show {
        padding-top: 1rem;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
