import coursesReducer from '../reducer.js';
import { courseAdded } from '../actionCreators.js';

const initialState = [];
const newCourse = {
	id: '1',
	title: 'Course 1',
	description: 'Course 1 description',
	duration: 120,
	creationDate: '08/12/21',
	authors: ['author-1', 'author-3'],
};

test('reducer should return the initial state', () => {
	expect(coursesReducer(undefined, {})).toEqual(initialState);
});

test('reducer should handle SAVE_COURSE and returns new state', () => {
	const previousState = [];

	expect(coursesReducer(previousState, courseAdded(newCourse))).toEqual([
		{
			id: '1',
			title: 'Course 1',
			description: 'Course 1 description',
			duration: 120,
			creationDate: '08/12/21',
			authors: ['author-1', 'author-3'],
		},
	]);
});
