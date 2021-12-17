import {
	fetchCourses,
	addCourse,
	deleteCourse,
	editCourse,
} from '../../services';
import { coursesLoaded, courseAdded, courseDeleted } from './actionCreators';

export const fetchCoursesThunk = () => async (dispatch) => {
	const courses = await fetchCourses();

	if (courses) {
		dispatch(coursesLoaded(courses));
	}
};

export const addCourseThunk = (course) => async (dispatch) => {
	const result = await addCourse(course);

	if (result) {
		dispatch(courseAdded(result));
	}
};

export const deleteCourseThunk = (id) => async (dispatch) => {
	await deleteCourse(id);

	dispatch(courseDeleted(id));
};

export const editCourseThunk = (data) => async (dispatch) => {
	const response = await editCourse(data);

	console.log('EDIT RESPONSE IN THUNK', response);
};
