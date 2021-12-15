import { fetchAuthors } from '../../services';
import { authorsLoaded } from './actionCreators';

export const fetchAuthorsThunk = () => async (dispatch) => {
	const authors = await fetchAuthors();

	dispatch(authorsLoaded(authors));
};
