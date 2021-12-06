import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';

import { getToken } from './helpers/localStorageHandler';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout.jsx';
import Courses from './components/Courses/Courses.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo.jsx';

const App = () => {
	const token = getToken();
	const location = useLocation();

	if (!token) {
		if (location.pathname === '/login') {
			return <Login />;
		}

		if (location.pathname === '/registration') {
			return <Registration />;
		}
	}

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={token ? <Courses /> : <Login />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses' element={token ? <Courses /> : <Login />} />
					<Route
						path='courses/add'
						element={
							token ? <CreateCourse courseDurationDefault='00:00' /> : <Login />
						}
					/>
					<Route
						path='courses/:courseId'
						element={token ? <CourseInfo /> : <Login />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
