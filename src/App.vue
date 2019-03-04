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
          <sideBar></sideBar>
        </div>
        <div class="components-content fl">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import config from '../config.js';
import sideBar from '@/components/sideBar.vue';
@Component({
  components: {
    sideBar,
  },
})
export default class App extends Vue {
  config = config;
  created() {
    console.log('config', config);
  }
}
</script>

<style lang='scss'>
#app {
  width: 100%;
  height: 100%;
  background: url('./assets/background.png') no-repeat center;
  overflow: hidden;
  .components {
    width: 100%;
    height: 100%;
  
    &-sidebar {
      width: 2.4rem;
      height: 100%;
    }
    &-content {
      padding-left: 2.4rem;
    }
  }
}
</style>
