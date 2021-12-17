import { fetchAuthors, saveNewAuthor } from '../../services';
import { authorsLoaded, addAuthor } from './actionCreators';

export const fetchAuthorsThunk = () => async (dispatch) => {
	const authors = await fetchAuthors();

	if (!authors) return;

	if (authors) {
		dispatch(authorsLoaded(authors));
	}
};

export const addAuthorThunk = (author) => async (dispatch) => {
	const result = await saveNewAuthor(author);

	if (!result) return;

	if (result) {
		dispatch(addAuthor(author));
	}
};
