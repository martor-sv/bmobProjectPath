<template>
  <div>
    <XButton type="primary" @click.native="getIP">测试接口</XButton>
    <div>{{ ip }}</div>
    <span>
          location: lng = {{ this.$data.lng }} lat = {{ this.$data.lat }}
    </span>

    <el-amap vid="amap" :plugin="plugin" class="amap-demo">
    </el-amap>

  </div>
</template>

<script>

import {XButton} from "vux";
import wxmp from "../http/wxmp";
import HttpUtil from "../http/HttpUtil";

export default {

  components: {
    XButton,
  },
  data() {
    let self = this;
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      ip: 'Hello World!',
      center: [121.59996, 31.197646],
      lng: 12,
      lat: 12,
      loaded: false,

      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                // console.log( self.lng+"======="+self.lat);

                self.saveLC(self.lng, self.lat)
                self.$nextTick();
              }
            });
          }
        }
      }]
    }
  }, methods: {
    getIP() {
      // const params = new Map();
      // params["name"] = "天生骄傲"
      // params["ipAddress"] = this.$THREE.cip


      // var obj = {
      //   "ipAddress": this.$THREE.cip
      // }
      // console.log(obj)
      // wxmp.getIPAddress(obj)

    }, saveLC(lng, lat) {
      console.log(lng + "   123    " + lat)
      var add = {
        "lng": lng.toString(),
        "lat":lat.toString()
      }
      console.log(add)
      wxmp.saveAddress(add)

    }

  }, mounted() {

    var obj = {
      "ipAddress": this.$THREE.cip
    }

    this.ip = this.$THREE.cip
    wxmp.getIPAddress(obj)
    console.log(this.$THREE.cip)
  }, create() {
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
