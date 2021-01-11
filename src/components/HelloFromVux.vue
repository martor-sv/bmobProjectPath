<template>
  <div>
    <XButton type="primary" @click.native="getIP">测试接口</XButton>
    <div>{{ ip }}</div>
  </div>
</template>
<!--<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>-->
<script>

import {XButton} from "vux";
import wxmp from "../http/wxmp";
// import a from ''

export default {

  components: {
    XButton,
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      ip: 'Hello World!'
    }
  }, methods: {
    getIP() {
      // const params = new Map();
      // params["name"] = "天生骄傲"
      // params["ipAddress"] = this.$THREE.cip


      var obj = {
        // "name": "天生骄傲",
        "ipAddress": this.$THREE.cip
      }

      // console.log(params)
      console.log(obj)

      // console.log(JSON.stringify(params))
      //
      // console.log(params.toString())
      // JSON.parse(params.toString())


      // var namea = {"name": "apple"}
      wxmp.getIPAddress(obj)


      // console.log(111)
      // this.getUserIP((ip) => {
      //   this.ip = ip;
      // });

    },

  }, mounted() {

    var obj = {
      "ipAddress": this.$THREE.cip
    }

    wxmp.getIPAddress(obj)

    console.log(this.$THREE.cip)

  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
