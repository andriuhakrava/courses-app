export const setToken = (userToken) => {
	localStorage.setItem('userToken', userToken);
};

export const setUserName = (userName) => {
	localStorage.setItem('userName', userName);
};

export const getToken = () => {
	const token = localStorage.getItem('userToken');
	return token;
};

export const getUserName = () => {
	const name = localStorage.getItem('userName');
	return name;
};

export const removeToken = () => localStorage.removeItem('userToken');

export const removeUserName = () => localStorage.removeItem('userName');
