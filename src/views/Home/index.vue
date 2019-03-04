<template>
  <div class="home">
    <div class="home__nav">
    
    </div>

    <div class="home__container">
      home主页...............
    </div>

    <div class="home__footer"></div>
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
  &__nav {
  }

  &__container {
    .home__label {
      margin-top: 20px;
    }
  }
}
</style>
