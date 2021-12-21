import axios from 'axios';
import { getToken } from './helpers/localStorageHandler.js';

const BASE_URL = 'http://localhost:3000';

export const fetchCourses = async () => {
	const response = await axios.get(`${BASE_URL}/courses/all`);

	if (!response) return;

	return response.data.result;
};

export const fetchAuthors = async () => {
	const response = await axios.get(`${BASE_URL}/authors/all`);

	if (!response) return;

	return response.data.result;
};

export const logIn = async (user) => {
	try {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response) return;

		const data = await response.json();

		if (data.successful === true) {
			return {
				token: data.result,
				user: data.user,
			};
		} else {
			alert('Please fill in right email or password!');
			return;
		}
	} catch (error) {
		console.error(error);
	}
};

export const logOut = async () => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/logout`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});
		if (response.status === 200) return true;
	} catch (error) {
		console.error(error);
	}
};

export const fetchCurrentUser = async () => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});

		const data = await response.json();

		return data.result;
	} catch (error) {
		console.error(error);
	}
};

export const addCourse = async (course) => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/courses/add`, {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});

		const data = await response.json();

		return data.result;
	} catch (error) {
		console.error(error);
	}
};

export const deleteCourse = async (id) => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/courses/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});
		if (response.status === 200) return true;
	} catch (error) {
		console.error(error);
	}
};

export const editCourse = async (id, content) => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/courses/${id}`, {
			method: 'PUT',
			body: JSON.stringify(content),
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});

		const data = await response.json();

		return data.result;
	} catch (error) {
		console.error(error);
	}
};

export const saveNewAuthor = async (author) => {
	const token = getToken();

	try {
		const response = await fetch(`${BASE_URL}/authors/add`, {
			method: 'POST',
			body: JSON.stringify(author),
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': token,
			},
		});

		const data = await response.json();

		return data.result;
	} catch (error) {
		console.error(error);
	}
};
