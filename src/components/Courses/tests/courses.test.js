import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Courses from '../Courses.jsx';
import CoursesList from '../components/CoursesList/CoursesList.jsx';
import Button from '../../../common/Button/Button.jsx';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		email: 'Test Email',
		role: '',
		token: 'Test Token',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('shows CreateForm after a click on a button "Add new course"', () => {
	const history = createMemoryHistory();
	const showAddCourseForm = () => history.push('/courses/add');

	const { getByText } = render(
		<Provider store={mockedStore}>
			<BrowserRouter location={history.location} navigator={history}>
				<Button
					buttonType='button'
					buttonText='Add new course'
					onClick={showAddCourseForm}
				/>
			</BrowserRouter>
		</Provider>
	);

	const addCourseBtn = getByText(/add new course/i);

	fireEvent.click(addCourseBtn);

	expect(history.location.pathname).toEqual('/courses/add');
});

test('displays empty container if courses array length is 0', () => {
	const mockedCourses = [];

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Courses>
					<CoursesList courses={mockedCourses} />
				</Courses>
			</BrowserRouter>
		</Provider>
	);

	expect(mockedCourses.length).toEqual(0);

	const list = screen.queryByRole('list');

	expect(list).not.toBeInTheDocument();

	expect(screen.getByText(/courses list is empty/i)).toBeInTheDocument();
});
