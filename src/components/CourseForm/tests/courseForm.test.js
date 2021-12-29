import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseForm from '../CourseForm';
import mockedStore from '../../../store/tests/mockedStore.js';

test('displays authors list in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		</Provider>
	);

	const list = screen.getByTestId('authors-list');
	const { getAllByRole } = within(list);
	const items = getAllByRole('listitem');

	expect(items.length).toEqual(3);
});

test('displays course authors list in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		</Provider>
	);

	// const list = screen.getByTestId('course-authors-list');
	// const { queryAllByRole } = within(list);
	// const items = queryAllByRole('listitem');

	// expect(items.length).toEqual(3);
});
