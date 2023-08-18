import axios from 'axios';

const API = {
  call: function () {
    return axios.create({
      baseURL: 'http://localhost:8081/api',
    });
  },
  callWithToken: function (accessToken) {
    if (!accessToken) accessToken = localStorage.getItem('ACCESS_TOKEN');
    return axios.create({
      baseURL: 'http://localhost:8081/api',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
export default API;