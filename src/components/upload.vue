<template>
  <div class="upload">
    <el-button type="primary" @click="upload()">上传照片</el-button>
    <img id="img" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      getFileList: []
    };
  },
  methods: {
    upload: function() {
      var i = 0;
      //将this.getFileList赋值为：this.$axios.get方法的返回值的then方法的返回值
      let self = this;
      this.$axios
        .get(
          "http://192.168.31.182:8899/GetFileList" //通知网卡去链接进行请求
        )
        //.then参数为函数，是promise为成功时要做的事，返回promise
        // 注册promise状态变为成功后要做的事（等promise成功后，就会自动执行该方法）
        // response代表promise成功的结果，由nodejs异步操作上面的get后，自动作为参数传入then中的function
        .then(function(response) {
          // console.log("then" + JSON.stringify(response));
          self.getFileList = response.data.FileList;
          console.log("getFileList:" + self.getFileList);
          console.log("num " + self.getFileList.length);
          // document.getElementById("img");
        })
        .catch(err => {
          console.log("catch" + err);
        });

      // .then(function(response) {
      //   return;
    }
    // .catch(err => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
  background-image: url("../assets/background_login.png");
  background-size: 100% 100%;
  width: 100%;
  height: 610px;
}
</style>