import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Courses from '../Courses.jsx';
import mockedStore from '../../../store/tests/mockedStore.js';

test('shows CreateForm after a click on a button "Add new course"', () => {
	const history = createMemoryHistory();

	render(
		<Provider store={mockedStore}>
			<Router location={history.location} navigator={history}>
				<Courses />
			</Router>
		</Provider>
	);

	userEvent.click(screen.getByText(/add new course/i));

	expect(history.location.pathname).toEqual('/courses/add');
});

test('displays empty container if courses array length is 0', () => {
	const history = createMemoryHistory();

	render(
		<Provider store={mockedStore}>
			<Router location={history.location} navigator={history}>
				<Courses />
			</Router>
		</Provider>
	);
});
