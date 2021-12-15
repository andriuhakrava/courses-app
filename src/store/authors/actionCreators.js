import { FETCH_AUTHORS, SAVE_AUTHOR } from './actionTypes';

export const authorsLoaded = (data) => ({
	type: FETCH_AUTHORS,
	payload: data,
});

export const addNewAuthor = (author) => ({
	type: SAVE_AUTHOR,
	payload: author,
});
