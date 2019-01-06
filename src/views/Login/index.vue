<template>
  <div class="login">
    <div class="container">
      <Card>

      </Card>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue';
export default class Login extends Vue {}
</script>

<style lang='less'>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png") no-repeat center;
  overflow: hidden;
  .container {
    width: 6rem;
    height: 4rem;
    border: 1px solid #000;
    margin: 1rem auto;
  }
}
</style>

