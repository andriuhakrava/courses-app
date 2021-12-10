import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
