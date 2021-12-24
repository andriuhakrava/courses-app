import {
	setToken,
	setUserName,
	removeToken,
	removeUserName,
} from '../../helpers/localStorageHandler.js';

import { logIn, logOut, fetchCurrentUser } from '../../services.js';

import { logInUser, logOutUser, authenticateUser } from './actionCreators';

export const logInUserThunk = (user) => async (dispatch) => {
	const result = await logIn(user);

	if (!result) return;

	let name = result.user.name;
	const token = result.token;

	if (result) {
		setToken(token);
		setUserName(name);

		dispatch(logInUser(result));
	}
};

export const logOutUserThunk = () => async (dispatch) => {
	const result = await logOut();

	if (!result) return;

	if (result) {
		removeToken();
		removeUserName();

		dispatch(logOutUser());
	}
};

export const fetchCurrentUserThunk = () => async (dispatch) => {
	const result = await fetchCurrentUser();

	if (result) {
		dispatch(authenticateUser(result));
	} else {
		removeToken();
		removeUserName();

		dispatch(logOutUser());
	}
};
