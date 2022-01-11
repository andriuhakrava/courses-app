import { render, screen, within, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseForm from '../CourseForm';
import Button from '../../../common/Button/Button';
import mockedStore from '../../../store/tests/mockedStore.js';

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
					buttonType='submit'
					buttonText='Create author'
					onClick={handleClick}
				/>
			</BrowserRouter>
		</Provider>
	);

	const createAuthorBtn = screen.getByRole('button');

	expect(createAuthorBtn).toBeInTheDocument();

	fireEvent.click(createAuthorBtn);

	expect(handleClick).toHaveBeenCalledTimes(1);
});
