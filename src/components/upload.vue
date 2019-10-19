<template>
  <div class="upload">
    <!-- <el-button type="primary" @click="upload()">上传照片</el-button> -->
    <img
      class="photoShow"
      alt="photo of ball"
      v-for="(fileList,i) in photoList"
      :src="urlXb+photoList[i]"
      :id="'img_'+i"
    />
    <!-- src="../assets/loading.gif" -->
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      getFileList: [],
      photoList: [],
      urlXb: "http://192.168.31.182:8899",
      pathXb: "/GetFileList"
    };
  },
  mounted() {
    this.upload();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    upload: function() {
      let self = this;
      this.$axios
        .request({
          url: self.urlXb + self.pathXb, //通知网卡去链接进行请求
          method: "get",
          params: {
            // 请求的参数
            // search: "biu",
            // ball: 123
          },
          data: {
            // 使用post时，请求的body代表请求的主体内容
            // haha: "balabala"
          }
        })
        //.then参数为函数，是promise为成功时要做的事，then返回一个promise对象
        // 注册promise状态变为成功后要做的事（等promise成功后，就会自动执行该方法）
        // response代表promise成功的结果，由nodejs异步操作上面的get后，自动作为参数传入then中的function
        .then(function(response) {
          //将this.getFileList赋值（为：this.$axios.get方法的返回值的then方法的返回值）
          self.getFileList = response.data.FileList;

          self.photoList.push(self.getFileList[self.photoList.length]);
          self.photoList.push(self.getFileList[self.photoList.length]);
          console.log("getFileList:" + self.getFileList);
          console.log("num " + self.getFileList.length);
          console.log("getFileList1:" + self.getFileList[0]);
          // document.getElementById("img");
        })
        .catch(err => {
          console.log("catch" + err);
        });

      // var promise1 = this.$axios.get("http://192.168.31.182:8899/GetFileList");

      // var promiseThen = promise1.then(function(resopnse) {
      //   self.getFileList = resopnse.data.FileList;
      //   console.log("getFileList:" + self.getFileList);
      //   console.log("num " + self.getFileList.length);
      // });

      // promiseThen.catch(err => {
      //   console.log("catch" + err);
      // });
    },
    handleScroll: function() {
      // let pageYOffset = window.pageYOffset;
      // // console.log("pageYoffset: " + window.pageYOffset);
      // let scrollTop = document.documentElement.scrollTop;
      // // console.log("scrollTop: " + scrollTop);
      // let scrollTopBody = document.body.scrollTop;
      // // console.log("scrollTopBody: " + scrollTopBody);
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = document.getElementById(
        "img_" + (this.photoList.length - 1)
      ).offsetTop;
      console.log("scrollTop: " + scrollTop);
      console.log("offsetTop: " + offsetTop);
      console.log("length-1:" + (this.photoList.length - 1));
      if (
        scrollTop > offsetTop &&
        this.photoList.length < this.getFileList.length
      ) {
        this.photoList.push(this.getFileList[this.photoList.length]);
      }
    }
    // checkImg: function() {
    //   let self = this;
    //   //var img = document.querySelectorAll(".photoShow");
    //   var windowHeight = document.documentElement.clientHeight; //获取屏幕可视窗口高度
    //   var elementTop = document.getElementsByName(i).offsetTop; //获取元素相对于文档顶部的距离
    //   var scrollTop = document.documentElement.scrollTop; //获取浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
    //   if (elementTop - scrollTop < windowHeight) {
    //     document.getElementsByName(i).src = "self.urlXb+self.getFileList[i]";
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
  background-image: url("../assets/background_pubilc.jpg");
  /* background-size: 100% 100%; */
  /* width: 100%; */
  background-size: 100% auto;
  background-repeat: repeat-y;
  padding-top: 100px;
  /* text-align: center; */
}
.photoShow {
  width: 55%;
  height: auto;
  margin-bottom: 100px;

  border: 15px solid rgb(185, 167, 127);
  /* border-radius: 30px; */
  box-shadow: 10px 10px 15px #888888;
  border-image: url(../assets/border_img.png) 30 30 round;
  border-image-width: 40px;
  border-image-outset: 15px;
  /* display: block; */

  /* text-align: center; */
}
</style>