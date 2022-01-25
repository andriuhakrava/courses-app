import { render, screen, within, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import mockedStore from './data';

import CourseForm from '../CourseForm';
import Button from '../../../common/Button/Button';

test('displays authors list in CourseForm component', () => {
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

	expect(items.length).toEqual(1);
});

test('displays course authors list in CourseForm component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		</Provider>
	);

	const list = screen.getByTestId('course-authors-list');
	const { queryAllByRole } = within(list);
	const items = queryAllByRole('listitem');

	expect(items.length).toEqual(0);
});

test(`'Create author' click button calls dispatch`, () => {
	const handleClick = jest.fn();

	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Button
					dataTestId='createAuthorButton'
					buttonType='submit'
					buttonText='Create author'
					onClick={handleClick}
				/>
			</BrowserRouter>
		</Provider>
	);

	const createAuthorBtn = screen.getByTestId('createAuthorButton');

	expect(createAuthorBtn).toBeInTheDocument();

	fireEvent.click(createAuthorBtn);

	expect(handleClick).toHaveBeenCalledTimes(1);
});

test(`Author buttons should add/delete an author to/from course authors list.`, () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		</Provider>
	);

	const listAuthors = screen.getByTestId('authors-list');
	const { getAllByRole } = within(listAuthors);
	const listAuthorsItems = getAllByRole('listitem');

	expect(listAuthorsItems.length).toEqual(1);

	const listCourseAuthors = screen.getByTestId('course-authors-list');
	const { queryAllByRole } = within(listCourseAuthors);
	let listCourseAuthorsItems = queryAllByRole('listitem');

	expect(listCourseAuthorsItems.length).toEqual(0);

	const addButtonElement = screen.getByTestId('addAuthorButton');

	fireEvent.click(addButtonElement);

	listCourseAuthorsItems = queryAllByRole('listitem');

	expect(screen.getByTestId('courseAuthorName')).toBeInTheDocument();
	expect(listCourseAuthorsItems.length).toEqual(1);

	const deleteButtonElement = screen.getByTestId('deleteAuthorButton');

	fireEvent.click(deleteButtonElement);
	listCourseAuthorsItems = queryAllByRole('listitem');

	expect(listCourseAuthorsItems.length).toEqual(0);
});
