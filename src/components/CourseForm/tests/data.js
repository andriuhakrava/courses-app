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

export default mockedStore;
