import coursesReducer from '../reducer.js';
import { courseAdded, coursesLoaded } from '../actionCreators.js';

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

test('reducer should handle GET_COURSES and returns new state', () => {
	const previousState = [];

	const loadedCourses = [
		{
			id: '2',
			title: 'Course 2',
			description: 'Course 2 description',
			duration: 380,
			creationDate: '23/10/21',
			authors: ['author-2'],
		},
		{
			id: '3',
			title: 'Course 3',
			description: 'Course 3 description',
			duration: 250,
			creationDate: '15/05/21',
			authors: ['author-1', 'author-2', 'author-3'],
		},
	];

	expect(coursesReducer(previousState, coursesLoaded(loadedCourses))).toEqual([
		{
			id: '2',
			title: 'Course 2',
			description: 'Course 2 description',
			duration: 380,
			creationDate: '23/10/21',
			authors: ['author-2'],
		},
		{
			id: '3',
			title: 'Course 3',
			description: 'Course 3 description',
			duration: 250,
			creationDate: '15/05/21',
			authors: ['author-1', 'author-2', 'author-3'],
		},
	]);
});
