<template>
  <div class="login">
    <div class="container">
      <div class="main">
        <el-input placeholder="请输入用户名" v-model="username">
          <i slot="prefix" class="el-input__icon el-icon-menu"></i>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password">
          <i slot="prefix" class="el-input__icon el-icon-view"></i>
        </el-input>
      </div>
      <div class="footer">
        <el-button type="primary" :loading="loading">登录</el-button>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue';
export default class Login extends Vue {
  // username data
  username: string = '';
  usernameError: boolean = false;
  usernameErrorMsg: string = '';

  // password data
  password: string = '';
  passwordError: boolean = false;
  passwordErrorMsg: string = '';

  loading: boolean = false;
  login() {
    this.loading = true;
    console.log(11);
    console.log(this.username, this.password);
  }
  // 简单的校验用户名
  validateUsername() {
    if (this.username === '') {
      this.usernameError = true;
      this.usernameErrorMsg = '用户名不能为空';
    } else {
      this.usernameError = false;
    }
  }
  // 简单校验密码
  validatePassword() {
    if (this.password === '') {
      this.passwordError = true;
      this.passwordErrorMsg = '密码不能为空';
    } else {
      this.passwordError = false;
    }
  }
}
</script>

<style lang='scss'>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png") no-repeat center;
  overflow: hidden;
  .container {
    width: 6rem;
    height: 4rem;
    border: 1px solid #000;
    margin: 3rem auto;
    padding: .1rem .2rem;
    background-color: #fff;
    border-radius: 10px;
    .main {
      height: 70%;
    }
    .footer {
      text-align: center;
      height: 20%;
      margin-top: 10px;
    }
  }
}
</style>

