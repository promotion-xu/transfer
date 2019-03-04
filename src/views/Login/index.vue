<template>
  <div class="login">
    <div class="title">
      <h5 class="animated infinite flash delay-1s">Personal Web</h5>
      <h5 class="animated infinite flash delay-1s">{{count}}</h5>
    </div>

    <div class="container">
      <div class="main">
        <el-input
          :error="usernameError"
          :error-message="usernameErrorMsg"
          placeholder="请输入用户名"
          v-model="username"
          type="text"
        >
          <i slot="prefix" class="el-input__icon iconfont icon-user"></i>
        </el-input>
        <el-input
          :error="passwordError"
          :error-message="passwordErrorMsg"
          placeholder="请输入密码"
          v-model="password"
          type="password"
          @keyup.enter.native="login()"
        >
          <i slot="prefix" class="el-input__icon el-icon-view"></i>
        </el-input>
      </div>
      <div class="footer">
        <el-button
          class="animated infinite fast jello"
          type="primary"
          :loading="loading"
          @click.native="login"
        >登录</el-button>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { loginByUsername } from './service/index';
import fetch from '@/api/axios';
import mapState from 'vuex';
import loginStore from '@/store/modules/login';
const LoginService = {
  loginByUsername,
};
@Component({
  computed: {},
  methods: {},
  watch: {},
})
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
  get count() {
    return this.$store.state.Login.state.count;
  }

  login() {
    this.loading = true;

    this.validateUsername();
    this.validatePassword();

    if (this.usernameError || this.passwordError) {
      this.loading = false;
      return;
    }

    LoginService.loginByUsername(this.username, this.password)
      .then(success => {
        if (success) {
          this.$router.push('/home');
        }
      })
      .catch(err => {
        this.handleLoginError(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  handleLoginError(errMsg: string) {
    this.usernameError = true;
    this.passwordError = true;
    this.usernameErrorMsg = errMsg;
    this.passwordErrorMsg = '';
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
  background: url('../../assets/background.png') no-repeat center;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  overflow: hidden;
  .title {
    text-align: center;
  }
  .container {
    width: 6rem;
    height: 4rem;
    border: 1px solid #000;
    margin: 0.1rem auto;
    padding: 0.1rem 0.2rem;
    background-color: #fff;
    border-radius: 10px;
    .main {
      height: 70%;
    }
    .footer {
      text-align: center;
      height: 20%;
      margin-top: 10px;
      button {
        width: 2rem;
      }
    }
  }
}
</style>

