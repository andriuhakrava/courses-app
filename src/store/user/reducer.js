import { LOGIN_USER, LOGOUT_USER } from './actionTypes.js';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				isAuth: true,
				name: action.payload.user.name,
				email: action.payload.user.email,
				token: action.payload.token,
			};
		}
		case LOGOUT_USER: {
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		}
		default:
			return state;
	}
}
