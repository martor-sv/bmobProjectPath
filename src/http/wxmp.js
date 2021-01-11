import HttpUtil from "../http/HttpUtil";

export default {
  // 获取微信openId
  getIPAddress (params) {
    return HttpUtil.post_json('/1/classes/ceshi', params)
  },

  creatVisitor(params){
    return HttpUtil.get('/api1/visitor-service/user',params)
  },

}
