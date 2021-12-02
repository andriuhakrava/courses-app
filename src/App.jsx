import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Courses from './components/Courses/Courses.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo.jsx';

const App = () => (
	<>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Courses />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='courses' element={<Courses />} />
				<Route
					path='courses/add'
					element={<CreateCourse courseDurationDefault='00:00' />}
				/>
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Route>
		</Routes>
	</>
);

export default App;
