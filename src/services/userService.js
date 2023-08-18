import API from "./api";

const userService = {
  login: function (data = {}) {
    return API.call().post('/auth/login', data);
  },
  register: function (data) {
    return API.call().post('/auth/register', data)
  },
  fetchMe: function () {
    return API.callWithToken().get('/taiKhoan/me');
  },
  joinTour:function (data){
    return API.callWithToken().post('/thamGia',data)
  },
  listJoinTour: function (){
    return API.callWithToken().get('/thamGia/me')
  },
  postComment: function (data){
    return API.callWithToken().post('/phanHoi',data)
  },
  deleteJoin: function (sttThamGia){
    return API.callWithToken().delete(`/thamGia/${sttThamGia}`)
  }
};


export default userService