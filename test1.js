const axios = require("axios");

setInterval(function () {
  var time1 = new Date().getTime();
  axios.request({
    url: "http://119.90.57.29:15502/api/CqjyCqzcgl/selectZcfxxAndZcxxExtByZcgltypeToPage",
    method: "post",
    params: {

    },
    data: {
      "zcgltype": "1",
      "pageNo": 1,
      "pageSize": 10,
      "publishstring": "1",
      "totalCount": 290,
      "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0anMxaiIsImV4cCI6MTU3MjQxMjc3NywiaWF0IjoxNTcxODA3OTc3LCJqdGkiOiI3N2RiZDY3NjhlNWU0YWRlOTE4MTA3ODdmZmJlNzIzZSJ9.H0gdZpAJpQhM7T3lJOCgcsDqmvN29T96R_GgAudaLUYc9ZMJ4zRFM4ANo9YvziJEEWlzug5NFUuzGUu-Iqsm_w"
    }


  }).then(function (response) {
    // response.msg.totalCount;
    // var answerEval = eval("(" + 'response' + ")");
    // console.log(typeof (response));
    for (var i = 0; i < response.data.msg.data.length; i++) {
      console.log("answerEval:" + JSON.stringify(response.data.msg.data[i].zcfxxid));
    }

    console.log("success");
    console.log("time1" + (new Date().getTime() - time1));
    // console.log("zcfxxid:" + answerEval.data[0]);
  }).catch(err => {
    console.log("fail:" + err)
  })
}, 10)
