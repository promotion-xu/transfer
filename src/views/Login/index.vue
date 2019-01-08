<template>
  <div class="login">
    <div class="container">
      <div class="main">
        <Input v-model='username' clearable prefix="ios-contact" placeholder="Enter username" type="text"/>
        <Input v-model='password' clearable prefix='ios-eye-off' placeholder="Enter password" type='password'/>
      </div>
      <div class="footer">
        <Button on-click='login' type="success" long>登录</Button>
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

  login() {
    console.log(11);
    console.log(this.username, this.password);
  }

  // 简单的校验用户名
  validateUsername() {
    if(this.username === '') {
      this.usernameError = true;
      this.usernameErrorMsg = '用户名不能为空';
    }else {
      this.usernameError = false;
    }
  }


  // 简单校验密码
  validatePassword() { 
    if(this.password === '') {
      this.passwordError = true;
      this.passwordErrorMsg = '密码不能为空';
    }else {
      this.passwordError = false;
    }
  }



}
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
    margin: 4rem auto;
    padding: 0.7rem 0.3rem 0.5rem 0.3rem;
    background-color: #fff;
    border-radius: 10px; 
    .main {
      height: 80%;
      // text-align: center;
      input {
        margin-bottom: .5rem;
      }
    }
    .footer {
      height: 20%;
    }
  }
}
</style>

