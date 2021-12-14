import { FETCH_COURSES, DELETE_COURSE, SAVE_COURSE } from './actionTypes';

import { fetchCourses } from '../../services';

export const coursesLoaded = (data) => ({
	type: FETCH_COURSES,
	payload: data,
});

export const courseDeleted = (courseId) => ({
	type: DELETE_COURSE,
	payload: courseId,
});

export const courseSaved = (course) => ({
	type: SAVE_COURSE,
	payload: course,
});

export const fetchCoursesThunk = () => async (dispatch) => {
	const courses = await fetchCourses();

	dispatch(coursesLoaded(courses[0]));
};
