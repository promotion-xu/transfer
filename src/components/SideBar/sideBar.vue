<template>
  <div class="sideBar">
    <!-- 顶部 -->
    <div class="userInfo">
      <p>user: xuzhen</p>
    </div>

    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图表可视化</span>
            </template>
            <el-menu-item-group>
              <template slot="title">charts</template>
              <el-menu-item index="1-1" @click="charts">linecharts</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="2" @click='clickPhoto'>
            <i class="el-icon-menu"></i>
            <span slot="title">图片压缩</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';
@Component({})
export default class Sidebar extends Vue {
  handleOpen(key: any, keyPath: any) {}
  handleClose(key: any, keyPath: any) {}
  created() {
  }
  charts() {
    this.$router.push('/charts');
  }
  clickPhoto() {
    this.$router.push('/photo')
  }
}
</script>

<style lang="scss">
.sideBar {
  height: 100%;
  font-size: 24px;
  background-color: rgb(84, 92, 100);
  .userInfo {
    text-align: center;
  }
}
</style>
