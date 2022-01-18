import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header.jsx';

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

test(`loads Header component with logo and user's name`, () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.getByAltText('logo')).toBeInTheDocument();

	expect(screen.getByText(/test name/i)).toBeInTheDocument();
});
