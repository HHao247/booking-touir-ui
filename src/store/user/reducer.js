import { ACT_LOGIN, ACT_LOGOUT } from "./actions"

const initState = {
  accessToken: localStorage.getItem('ACCESS_TOKEN'),
  currentUser: null
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        currentUser: action.payload.currentUser,
      }
    case ACT_LOGOUT:
      localStorage.removeItem('ACCESS_TOKEN');
      return {
        ...state,
        accessToken: null,
        currentUser: null,
      };
    default:
      return state
  }
}

export default reducer