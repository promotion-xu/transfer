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
import Sidebar from '@/components/sideBar.vue';
@Component({
  components: {
    Sidebar,
  },
})
export default class App extends Vue {
  config = config;
  created() {
  }
}
</script>

<style lang='scss'>
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
      padding-left: 2.4rem;
      height: 100%;
    }
  }
}
</style>
