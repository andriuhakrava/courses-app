import { FETCH_AUTHORS, SAVE_AUTHOR } from './actionTypes';

import { fetchAuthors } from '../../services';

const authorsLoaded = (data) => ({
	type: FETCH_AUTHORS,
	payload: data,
});

export const fetchAuthorsThunk = () => async (dispatch) => {
	const authors = await fetchAuthors();

	dispatch(authorsLoaded(authors));
};

export const addNewAuthor = (author) => ({
	type: SAVE_AUTHOR,
	payload: author,
});
