import { fetchCourses } from '../../services';
import { coursesLoaded } from './actionCreators';

export const fetchCoursesThunk = () => async (dispatch) => {
	const courses = await fetchCourses();

	dispatch(coursesLoaded(courses[0]));
};
