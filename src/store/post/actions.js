import { mappingComment, mappingPostData } from '../../helpers';
import adminService from '../../services/adminService';
import postService from '../../services/postService';
import userService from '../../services/userService';

export const ACT_FETCH_TOUR = 'ACT_FETCH_TOUR';
export const ACT_FETCH_DETAIL_TOUR = 'ACT_FETCH_DETAIL_TOUR';
export const ACT_SEARCH = 'ACT_SEARCH';
export const ADD_TOUR = 'ADD_TOUR';
export const ACT_FETCH_JOIN_TOUR = 'ACT_FETCH_JOIN_TOUR';
export const ACT_POST_JOIN_TOUR = 'ACT_POST_JOIN_TOUR';
export const ACT_FETCH_lIST_JOIN_ME = 'ACT_FETCH_lIST_JOIN_ME';
export const ACT_FETCH_COMMENT = 'ACT_FETCH_COMMENT';

export function actFetchComment(posts) {
  return {
    type: ACT_FETCH_COMMENT,
    payload: {
      posts,
    }
  }
}

export function actFetchCommentAsync(maTour){
  return async (dispatch)=>{
    const response = await postService.getFetchComment(maTour);
    const posts  = response.data.map(mappingComment);
    dispatch(actFetchComment(posts))
  }
}

export function actFetchListJoinMe(posts) {
  return {
    type: ACT_FETCH_lIST_JOIN_ME,
    payload: {
      posts
    }
  }
}
export function actFetchListJoinMeAsync() {
  return async (dispatch) => {
    const response = await userService.listJoinTour();
    const posts = response.data;
    dispatch(actFetchListJoinMe(posts))
  }
}
export function actAddTourAsync(data) {
  return async (dispatch) => {
    try {
      const response = await adminService.addTour(data);
      return {
        ok: true
      };
    } catch (error) {
      return {
        ok: false,
        error: 'Thêm thất bại'
      };
    }
  };
}
export function actPostJoinTour(data) {
  return async (dispatch) => {
    try {
      const response = await userService.joinTour(data);
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Tham gia thất bại'
      }
    }
  }
}

export function actFetchSearchTour(posts) {
  return {
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

export function actFetchSearchTourAsync(keySearch) {
  return async (dispatch) => {
    const response = await postService.getTourSearch(keySearch);
    const posts = response.data
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
  };
}
export function actGetPostDetailAsync(maTour) {
  return async (dispatch) => {
    const response = await postService.getPostDetail(maTour);
    const posts = response.data;
    dispatch(actGetPostDetail(posts));
  };
}
export function actGetListJoin(posts) {
  return {
    type: ACT_FETCH_JOIN_TOUR,
    payload: {
      posts,
    }
  }
}
export function actGetListJoinAsync(maTour) {
  return async (dispatch) => {
    const response = await adminService.postJoinTour(maTour);
    const posts = response.data
    dispatch(actGetListJoin(posts))
  }
}
