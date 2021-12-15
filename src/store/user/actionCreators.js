import {
	removeToken,
	removeUserName,
} from '../../helpers/localStorageHandler.js';

import { LOGIN_USER, LOGOUT_USER, SET_USER_ROLE } from './actionTypes.js';

export const logInUser = (response) => ({
	type: LOGIN_USER,
	payload: response,
});

export const logOutUser = () => {
	removeToken();
	removeUserName();

	return { type: LOGOUT_USER };
};

export const setUserRole = (role) => ({
	type: SET_USER_ROLE,
	payload: role,
});
