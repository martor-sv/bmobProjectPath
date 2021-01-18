<template>
  <div>

    <div class="box" align="center">
      <p>小姐姐</p>
      <p>我观察你很久了</p>
      <h1>做我对象好不好?</h1>
      <img src="../assets/flowers.jpg">
      <div class="bottom">
        <XButton type="primary" class="left" id="hao" @click.native="hao">好</XButton>
        <XButton type="warn" class="right" id="buhao" @click.native="buhao">不好</XButton>
      </div>
    </div>

    <el-amap vid="amap" :plugin="plugin" class="amap-demo">
    </el-amap>

  </div>
</template>

<script>

import {XButton} from "vux";
import wxmp from "../http/wxmp";

let Dianji = 0;
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
    hao() {
      alert("小姐姐终于同意了，我爱你");
      window.location.href = "http://tsdl.baiduux.com/h5/tsdl.html"
    },
    buhao() {
      Dianji++;
      if (Dianji == 1) {
        alert("小姐姐在考虑一下呗");
      } else if (Dianji == 2) {
        alert("你是我见过的最帅气善良可爱的女孩");

      } else if (Dianji == 3) {
        alert("一生一世爱你");

      } else if (Dianji == 4) {
        alert("家务我全干");

      } else if (Dianji == 5) {
        alert("不藏私房钱");
      } else if (Dianji == 6) {
        alert("房子写你名");
      } else if (Dianji == 7) {
        alert("工资全上交");
        Dianji = 1;
      }
    },
    saveLC(lng, lat) {
      console.log(lng + "   123    " + lat)
      var add = {
        "lng": lng.toString(),
        "lat": lat.toString()
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
