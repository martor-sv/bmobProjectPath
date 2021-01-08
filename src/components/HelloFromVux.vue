<template>
  <div>
    <XButton type="primary" @click.native="getIP">测试接口</XButton>
  </div>
</template>

<script>

import {XButton} from "vux";

export default {

  components: {
    XButton,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },methods:{
    getIP(){
      console.log(111)
    }

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
