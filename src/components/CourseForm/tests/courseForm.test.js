import { render, screen, within, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseForm from '../CourseForm';
import Button from '../../../common/Button/Button';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		email: 'Test Email',
		role: '',
		token: 'Test Token',
	},
	courses: [
		{
			id: '1',
			title: 'Course 1',
			description: 'Course 1 description',
			duration: 120,
			creationDate: '08/12/21',
			authors: ['author-1', 'author-3'],
		},
		{
			id: '2',
			title: 'Course 2',
			description: 'Course 2 description',
			duration: 500,
			creationDate: '10/12/21',
			authors: ['author-1', 'author-3', 'author-2'],
		},
		{
			id: '3',
			title: 'Course 3',
			description: 'Course 3 description',
			duration: 280,
			creationDate: '04/12/21',
			authors: ['author-1'],
		},
	],
	authors: ['author-1', 'author-2', 'author-3'],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

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

	expect(items.length).toEqual(3);
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
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test Name',
			email: 'Test Email',
			role: '',
			token: 'Test Token',
		},
		courses: [
			{
				id: '1',
				title: 'Course 1',
				description: 'Course 1 description',
				duration: 120,
				creationDate: '08/12/21',
				authors: ['author-1'],
			},
		],
		authors: ['author-1'],
	};

	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

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
	const listCourseAuthorsItems = queryAllByRole('course-authors-list');

	expect(listCourseAuthorsItems.length).toEqual(0);

	const addButtonElement = screen.getByTestId('addAuthorButton');

	fireEvent.click(addButtonElement);

	expect(screen.getByTestId('courseAuthorName')).toBeInTheDocument();

	const deleteButtonElement = screen.getByTestId('deleteAuthorButton');
	expect(deleteButtonElement).toBeInTheDocument();

	fireEvent.click(deleteButtonElement);

	expect(deleteButtonElement).not.toBeInTheDocument();
});
