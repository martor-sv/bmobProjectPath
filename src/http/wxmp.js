import HttpUtil from "../http/HttpUtil";

export default {
  // 保存IP地址信息
  getIPAddress (params) {
    return HttpUtil.post_json('/1/classes/ceshi', params)
  },

  //保存经纬度
  saveAddress(params){
    return HttpUtil.post_json('/1/classes/address',params)
  },

}
