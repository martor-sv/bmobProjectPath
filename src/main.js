// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'

import VueAMap from 'vue-amap';
Vue.use(VueAMap);

import VConsole from "vconsole";


VueAMap.initAMapApiLoader({
  // 高德的key
  key: '0f4f67e6d6fe7dcfec8d2b2949dbf00c',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});


var THREE = window.returnCitySN
// var GLTFLoader = THREE.GLTFLoader
Vue.prototype.$THREE = THREE


Vue.use(VueRouter)

var vConsole = new VConsole()

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
