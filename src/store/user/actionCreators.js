import { getToken } from '../../helpers/localStorageHandler.js';

import { LOGIN_USER, LOGOUT_USER, AUTHENTICATE_USER } from './actionTypes.js';

export const logInUser = (response) => ({
	type: LOGIN_USER,
	payload: response,
});

export const logOutUser = () => ({
	type: LOGOUT_USER,
});

export const authenticateUser = (user) => {
	const token = getToken();

	const result = {
		...user,
		token,
	};

	return {
		type: AUTHENTICATE_USER,
		payload: result,
	};
};
