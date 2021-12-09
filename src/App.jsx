import './App.css';
import React, { useEffect } from 'react';

import { Navigate, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { getToken } from './helpers/localStorageHandler';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';

const App = () => {
	const token = getToken();
	const navigate = useNavigate();

	useEffect(() => {
		const token = getToken();

		if (!token) {
			navigate('/login');
		}
	}, [navigate, token]);

	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={token ? <Navigate to='/courses' /> : <Login />}
				/>
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='courses' element={token ? <Courses /> : <Login />} />
				<Route
					path='courses/add'
					element={token ? <CreateCourse /> : <Login />}
				/>
				<Route
					path='courses/:courseId'
					element={token ? <CourseInfo /> : <Login />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
