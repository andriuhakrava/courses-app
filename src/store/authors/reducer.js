import { FETCH_AUTHORS, ADD_AUTHOR } from './actionTypes.js';

const authorsInitialState = [];

export default function authorsReducer(state = authorsInitialState, action) {
	switch (action.type) {
		case FETCH_AUTHORS: {
			return [...action.payload];
		}
		case ADD_AUTHOR: {
			return [...state, action.payload];
		}
		default:
			return state;
	}
}
