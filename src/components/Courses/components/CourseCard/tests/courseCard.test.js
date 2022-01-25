import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseCard from '../CourseCard';

import { mockedCourse, mockedStore } from './data';

test('displays course title in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard course={mockedCourse} />
			</BrowserRouter>
		</Provider>
	);

	expect(
		screen.getByRole('heading', {
			name: /test title/i,
			level: 2,
		})
	).toBeInTheDocument();
});

test('displays course authors list in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard course={mockedCourse} />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.getByTestId('authorslist')).toBeInTheDocument();
});

test('displays course description in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard course={mockedCourse} />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.getByTestId('course-description')).toBeInTheDocument();
});

test('displays course duration in correct format in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard course={mockedCourse} />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.getByText('05:00 hours')).toBeInTheDocument();
});

test('displays course creation date in correct format in CourseCard component', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<CourseCard course={mockedCourse} />
			</BrowserRouter>
		</Provider>
	);

	expect(screen.queryByText('08.03.21')).toBeInTheDocument();
});
