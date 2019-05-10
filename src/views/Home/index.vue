<template>
  <div class="home">
    <div class="pic"></div>
    <el-button type="primary" @click="btnClick" class="btn">神奇特效</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Exif from 'exif-js';
import axios from 'axios';
@Component
export default class Home extends Vue {
  created() {}
  mounted() {
  }
  btnClick() {}
}
</script>


<style lang="scss">
.home {
  .pic {
    width: 1000px;
    height: 655px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: tan;
    transform-style: preserve-3d;
    perspective: 500px;
  }
  .item{
    position: absolute;
  }
}
</style>
