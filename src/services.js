import axios from 'axios';
import { getToken } from './helpers/localStorageHandler.js';

const BASE_URL = 'http://localhost:3000';

export const fetchCourses = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/courses/all`);

		return response.data.result;
	} catch (error) {
		console.error(error);
	}
};

export const fetchAuthors = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/authors/all`);

		return response.data.result;
	} catch (error) {
		console.error(error);
	}
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

// export const deleteCourse = async (id) => {
// 	const token = getToken();

// 	try {
// 		const response = await fetch(`${BASE_URL}/courses/${id}`, {
// 			method: 'DELETE',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				// eslint-disable-next-line
// 				'Authorization': token,
// 			},
// 		});
// 		// if (response.status === 200) return true;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
