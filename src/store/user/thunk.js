import { setToken, setUserName } from '../../helpers/localStorageHandler.js';
import { logIn } from '../../services.js';
import { logInUser, setUserRole } from './actionCreators';
import { ROLE } from './roles.js';

export const loginUserThunk = (user) => async (dispatch) => {
	const result = await logIn(user);

	if (result.user.email === 'admin@email.com') {
		dispatch(setUserRole(ROLE.ADMIN));
	} else {
		dispatch(setUserRole(''));
	}

	if (result) {
		setToken(result.token);
		setUserName(result.user.name);

		dispatch(logInUser(result));
	}
};
