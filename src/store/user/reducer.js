const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: localStorage.getItem('userToken') || '',
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				isAuth: true,
				name: action.user.name,
				email: action.user.email,
				token: action.user.token,
			};
		default:
			return state;
	}
}
