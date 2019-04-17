<template>
  <div class="home">
    <div class="images">
      <img src="@/assets/avatar.jpeg" />
      <img src="@/assets/avatar.jpeg" />
    </div>
    <el-button type="primary" class="btn">神奇特效</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Exif from 'exif-js';
import axios from 'axios';
@Component
export default class Home extends Vue {
 


  created() {
    
  }


}
</script>


<style lang="scss">
.home {
  img{
    width: 200px;
    height: 200px;
  }
}
</style>
