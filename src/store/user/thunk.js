import { setToken, setUserName } from '../../helpers/localStorageHandler.js';
import { logIn } from '../../services.js';
import { logInUser } from './actionCreators';

export const loginUserThunk = (user) => async (dispatch) => {
	const result = await logIn(user);

	if (result) {
		setToken(result.token);
		setUserName(result.user.name);

		dispatch(logInUser(result));
	}
};
