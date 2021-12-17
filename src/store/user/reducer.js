import { LOGIN_USER, LOGOUT_USER, AUTHENTICATE_USER } from './actionTypes.js';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case AUTHENTICATE_USER: {
			const { name, email, role, token } = action.payload;
			return {
				...state,
				isAuth: true,
				name,
				email,
				role,
				token,
			};
		}
		case LOGIN_USER: {
			const { name, email } = action.payload.user;
			const { token } = action.payload;
			return {
				...state,
				isAuth: true,
				name,
				email,
				token,
			};
		}
		case LOGOUT_USER: {
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		}
		default:
			return state;
	}
}
