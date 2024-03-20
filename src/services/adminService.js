import API from "./api"

const adminService = {
    addTour: function (data) {
        return API.callWithToken().post('/tour', data)
    }
}
export default adminService