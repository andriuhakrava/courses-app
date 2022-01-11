import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses } from '../../store/courses/selectors';

import { Wrapper, Content } from './Courses.style.js';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import CoursesList from './components/CoursesList/CoursesList.jsx';

import { fetchAuthorsThunk } from '../../store/authors/thunk.js';
import { fetchCoursesThunk } from '../../store/courses/thunk.js';
import { fetchCurrentUserThunk } from '../../store/user/thunk.js';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUserThunk());
		dispatch(fetchAuthorsThunk());
		dispatch(fetchCoursesThunk());
		// eslint-disable-next-line
	}, []);

	const courses = useSelector(getCourses);
	const [coursesRenderList, setCoursesRenderList] = useState(courses);

	useEffect(() => {
		setCoursesRenderList(courses);
	}, [courses]);

	const navigate = useNavigate();

	const showCreateCourseForm = (e) => {
		e.preventDefault();

		navigate(`/courses/add`);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);

		if (e.target.value === '') {
			setCoursesRenderList(courses);
		}
	};

	const findCourse = (query, itemInCourses) => {
		const title = itemInCourses.title.toLowerCase();
		const id = itemInCourses.id;

		if (title.includes(query) || id.includes(query)) {
			return itemInCourses;
		}
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();

		if (searchQuery.length === 0) {
			alert('Please, fill in search field!');
			return;
		}

		const searchedCourseFormatted = searchQuery.toLowerCase();

		const coursesFiltered = coursesRenderList.filter((item) =>
			findCourse(searchedCourseFormatted, item)
		);

		setCoursesRenderList(coursesFiltered);
	};

	return (
		<div className='container'>
			<>
				<Wrapper>
					<SearchBar
						handleChange={handleSearchChange}
						handleSubmit={handleSearchSubmit}
					/>
					<Button
						buttonType='button'
						buttonText='Add new course'
						onClick={showCreateCourseForm}
					/>
				</Wrapper>
				{coursesRenderList.length ? (
					<Content>
						<CoursesList courses={coursesRenderList} />
					</Content>
				) : (
					<div>Courses list is empty</div>
				)}
			</>
		</div>
	);
};

export default Courses;
