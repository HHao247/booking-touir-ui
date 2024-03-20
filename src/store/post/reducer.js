import { ACT_FETCH_DETAIL_TOUR, ACT_FETCH_TOUR, ACT_SEARCH } from './actions';
const initState = {
  postsTour: [],
  postDetail: [],
  postsSearch:[]
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_TOUR:
      return {
        ...state,
        postsTour: action.payload
      };
    case ACT_FETCH_DETAIL_TOUR:
      return {
        ...state,
        postDetail: action.payload.posts
      };
    case ACT_SEARCH:
      return {
        ...state,
        postsSearch: action.payload.posts
      };
    default:
      return state;
  }
}
export default reducer;
