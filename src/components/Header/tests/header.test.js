import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header.jsx';
import mockedStore from '../../../store/tests/mockedStore.js';

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
