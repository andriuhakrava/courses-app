import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Courses from '../Courses.jsx';
import CoursesList from '../components/CoursesList/CoursesList.jsx';
import CourseForm from '../../CourseForm/CourseForm.jsx';

import mockedStore from './data';

test('shows CreateForm after a click on a button "Add new course"', () => {
	const history = createMemoryHistory();

	const { getByText } = render(
		<Provider store={mockedStore}>
			<BrowserRouter history={history}>
				<Routes>
					<Route path='/' element={<Courses />} />
					<Route path='/courses/add' element={<CourseForm />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);

	const addCourseBtn = getByText(/add new course/i);

	fireEvent.click(addCourseBtn);

	const courseFormElement = screen.getByTestId('courseForm');

	expect(courseFormElement).toBeInTheDocument();
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
