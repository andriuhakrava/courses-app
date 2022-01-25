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

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const mockedCourse = {
	authors: ['author-2', 'author-3'],
	creationDate: '08/03/21',
	description: 'Test Description',
	duration: 300,
	id: '0',
	title: 'Test Title',
};
