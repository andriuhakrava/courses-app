import coursesReducer from '../reducer.js';
import { courseAdded, coursesLoaded } from '../actionCreators.js';

import { initialState, newCourse, loadedCourses } from './data';

test('reducer should return the initial state', () => {
	expect(coursesReducer(undefined, {})).toEqual(initialState);
});

test('reducer should handle SAVE_COURSE and returns new state', () => {
	expect(coursesReducer(initialState, courseAdded(newCourse))).toEqual([
		newCourse,
	]);
});

test('reducer should handle GET_COURSES and returns new state', () => {
	expect(coursesReducer(initialState, coursesLoaded(loadedCourses))).toEqual(
		loadedCourses
	);
});
