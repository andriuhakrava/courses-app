import {
	FETCH_COURSES,
	EDIT_COURSE,
	DELETE_COURSE,
	ADD_COURSE,
} from './actionTypes';

export const coursesLoaded = (data) => ({
	type: FETCH_COURSES,
	payload: data,
});

export const courseEdited = (id, course) => ({
	type: EDIT_COURSE,
	payload: {
		id,
		course,
	},
});

export const courseDeleted = (courseId) => ({
	type: DELETE_COURSE,
	payload: courseId,
});

export const courseAdded = (course) => ({
	type: ADD_COURSE,
	payload: course,
});
