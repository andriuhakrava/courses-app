import {
	FETCH_COURSES,
	SAVE_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes.js';

const coursesInitialState = [];

export default function coursesReducer(state = coursesInitialState, action) {
	switch (action.type) {
		case FETCH_COURSES: {
			return [...state, action.payload];
		}
		case SAVE_COURSE: {
			return [...state, action.payload];
		}
		case DELETE_COURSE: {
			return state.filter((item) => item.id !== action.payload);
		}
		case UPDATE_COURSE: {
			return state;
		}
		default:
			return state;
	}
}
