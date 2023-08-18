import { applyMiddleware, combineReducers, createStore } from 'redux';
import postReducer from './post/reducer';
import reducerUser from './user/reducer';

import thunk from 'redux-thunk';
const rootReducer= combineReducers({
    POST: postReducer,
    USER: reducerUser,
   
})

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;