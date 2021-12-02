import React, { useState } from 'react';

import { mockedCoursesList } from '../../constants';

import formatDuration from '../../helpers/pipeDuration';

import { Wrapper, Content } from './Courses.style.js';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import CoursesList from './components/CoursesList/CoursesList.jsx';
import CreateCourse from '../CreateCourse/CreateCourse.jsx';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [courses, setCourses] = useState(mockedCoursesList);
	const [courseDuration, setCourseDuration] = useState(0);
	const [isContentShow, setIsContentShow] = useState(true);

	const showCreateCourseForm = (e) => {
		e.preventDefault();

		setIsContentShow(false);

		const courseDurationFormatted = formatDuration(0);
		setCourseDuration(courseDurationFormatted);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);

		if (e.target.value === '') {
			setCourses([...mockedCoursesList]);
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

		const coursesFiltered = courses.filter((item) =>
			findCourse(searchedCourseFormatted, item)
		);

		setCourses(coursesFiltered);
	};

	return (
		<div className='container'>
			{isContentShow ? (
				<>
					<Wrapper>
						<SearchBar
							valueSearched={searchQuery}
							handleChange={handleSearchChange}
							handleSubmit={handleSearchSubmit}
						/>
						<Button
							buttonType='button'
							buttonText='Add new course'
							onClick={showCreateCourseForm}
						/>
					</Wrapper>
					<Content>
						<CoursesList courses={courses} />
					</Content>
				</>
			) : (
				<CreateCourse courseDurationDefault={courseDuration} />
			)}
		</div>
	);
};

export default Courses;
