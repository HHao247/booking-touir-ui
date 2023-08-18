import API from "./api"

const adminService = {
    addTour: function (data) {
        return API.callWithToken().post('/tour', data)
    },
    postJoinTour: function (maTour){
        return API.call().get(`/thamGia/tour/${maTour}`);
    },
    deleteTour: function (maTour){
        return API.callWithToken().delete(`/tour/${maTour}`)
    }
}
export default adminService