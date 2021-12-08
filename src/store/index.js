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

function configureStore() {
	const middlewareEnhancer = applyMiddleware(thunkMiddleware);
	const composedEnhancers = composeWithDevTools(middlewareEnhancer);

	const store = createStore(rootReducer, composedEnhancers);

	return store;
}

const store = configureStore();

export default store;
