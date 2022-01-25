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

export default mockedStore;
