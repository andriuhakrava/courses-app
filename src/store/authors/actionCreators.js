import { FETCH_AUTHORS, ADD_AUTHOR } from './actionTypes';

export const authorsLoaded = (data) => ({
	type: FETCH_AUTHORS,
	payload: data,
});

export const addAuthor = (author) => ({
	type: ADD_AUTHOR,
	payload: author,
});
