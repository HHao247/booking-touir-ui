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
};


export default userService