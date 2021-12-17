import {
	FETCH_COURSES,
	ADD_COURSE,
	EDIT_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes.js';

const coursesInitialState = [];

export default function coursesReducer(state = coursesInitialState, action) {
	switch (action.type) {
		case FETCH_COURSES: {
			return [...action.payload];
		}
		case ADD_COURSE: {
			return [...state, action.payload];
		}
		case EDIT_COURSE: {
			return state;
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
