import HttpUtil from "../http/HttpUtil";

export default {
  // 保存IP地址信息
  getIPAddress (params) {
    return HttpUtil.post_json('/1/classes/ceshi', params)
  },

  creatVisitor(params){
    return HttpUtil.get('/api1/visitor-service/user',params)
  },

}
