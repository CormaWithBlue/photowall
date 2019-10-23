const axios = require('axios')
// var fileList = [];

var i = 0;
setInterval(function () {
  var timestamp = new Date().getTime();
  axios.request({
    url: "http://139.180.174.248/GetFileList",
    method: "get"
  }).then(function (response) {
    let fileList = response.data.FileList;
    console.log("success");
    console.log("time:" + (new Date().getTime() - timestamp))
  }).catch(err => {
    console.log("fail");
  })
  i++;
  console.log("request_count:" + i);
}, 100)
