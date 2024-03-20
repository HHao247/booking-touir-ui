import { mappingPostData } from '../../helpers';
import postService from '../../services/postService';

export const ACT_FETCH_TOUR = 'ACT_FETCH_TOUR';
export const ACT_FETCH_DETAIL_TOUR = 'ACT_FETCH_DETAIL_TOUR';
export const ACT_SEARCH = 'ACT_SEARCH';

export function actFetchSearchTour(posts) {
    return{
        type: ACT_SEARCH,
        payload: {
            posts
        }
    }
}
export function actFetchTour(posts) {
    return {
        type: ACT_FETCH_TOUR,
        payload: posts,
    };
}

export function actFetchSearchTourAsync(keySearch){
    return async (dispatch)=>{
        const response = await postService.getTourSearch(keySearch);
        const posts = response.data.map(mappingPostData);
        dispatch(actFetchSearchTour(posts))
    };
}
export function actFetchTourAsync() {
    return async dispatch => {
        const response = await postService.getTour();
        const posts = response.data.map(mappingPostData);
        dispatch(actFetchTour(posts));
    };
}
export function actGetPostDetail(posts) {
	return {
		type: ACT_FETCH_DETAIL_TOUR,
		payload: {
			posts,
		}
	}
}
export function actGetPostDetailAsync(maTour) {
	return async (dispatch) => {
		const response = await postService.getPostDetail(maTour);
        const posts = response.data;
		dispatch(actGetPostDetail(posts))
	}
}

