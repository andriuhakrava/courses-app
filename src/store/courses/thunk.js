import {
	fetchCourses,
	addCourse,
	deleteCourse,
	editCourse,
} from '../../services';
import {
	coursesLoaded,
	courseAdded,
	courseDeleted,
	courseEdited,
} from './actionCreators';

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
	alert('The course has been deleted!');
};

export const editCourseThunk = (id, data) => async (dispatch) => {
	const response = await editCourse(id, data);

	if (response) {
		dispatch(courseEdited(response));
	}
};
