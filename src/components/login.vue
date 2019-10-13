<template>
  <div class="login">
    <div class="login_user">
      <br />
      <br />
      <a>登录：</a>
      <br />
      <br />
      <a>用户名：</a>
      <br />
      <br />
      <a>密码：</a>
      <br />
      <br />
      <a>图形验证码：</a>
    </div>
    <div class="login_input">
      <br />
      <br />
      <a></a>
      <br />
      <br />
      <a>
        <input />
      </a>
      <br />
      <br />
      <a>
        <input />
      </a>
      <br />
      <br />
      <a>
        <input />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-image: url("../assets/background_login.png");
  background-size: 100% 100%;
  width: 100%;
  height: 610px;
}
.login_user {
  text-align: right;
  width: 50%;
  float: left;
}
.login_input {
  text-align: left;
  position: relative;
  float: left;
  width: 40%;
}
</style>