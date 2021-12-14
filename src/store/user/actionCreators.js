import {
	setToken,
	setUserName,
	removeToken,
	removeUserName,
} from '../../helpers/localStorageHandler.js';

import { LOGIN_USER, LOGOUT_USER } from './actionTypes.js';
import { logIn } from '../../services.js';

export const logInUser = (response) => ({
	type: LOGIN_USER,
	payload: response,
});

export const loginUserThunk = (user) => async (dispatch) => {
	const result = await logIn(user);

	if (result) {
		setToken(result.token);
		setUserName(result.user.name);

		dispatch(logInUser(result));
	}
};

export const logOutUser = () => {
	removeToken();
	removeUserName();

	return { type: LOGOUT_USER };
};
