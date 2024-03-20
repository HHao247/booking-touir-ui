import API from "./api";

const postService = {
	getAll: function (inputParams = {}) {
		return API.call().get('/tour', {
			params: {
				...inputParams,
			}
		})
	},
	getTour: function () {
		return API.call().get(`/tour/all`);
	},
	getPostDetail: function (maTour) {
		return API.call().get(`/tour/${maTour}`);
	},
	getTourSearch: function (keySearch){
		return API.call().get(`/tour/all${keySearch}`)
	},
}
export default postService;