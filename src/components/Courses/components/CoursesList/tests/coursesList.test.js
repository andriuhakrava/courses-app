import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoursesList from '../CoursesList.jsx';
import mockedStore from '../../../../../store/tests/mockedStore.js';

test('displays amount of course card entities', () => {
	const mockedCourses = mockedStore.getState().courses;

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CoursesList courses={mockedCourses} />
			</BrowserRouter>
		</Provider>
	);

	expect(mockedCourses).toHaveLength(3);
});

test('displays amount of course card entities', () => {
	const mockedCourses = [];

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CoursesList courses={mockedCourses} />
			</BrowserRouter>
		</Provider>
	);

	expect(mockedCourses.length).toEqual(0);
});
