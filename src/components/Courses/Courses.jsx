import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
	mockedCoursesList,
	mockedAuthorsList,
	regexpNumber,
} from '../../constants';

import formatDuration from '../../helpers/pipeDuration';

import { Wrapper, Content } from './Courses';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import CoursesList from './components/CoursesList/CoursesList.jsx';
import CreateCourse from '../CreateCourse/CreateCourse.jsx';

const Courses = () => {
	const [searchedCourse, setSearchedCourse] = useState('');
	const [courses, setCourses] = useState(mockedCoursesList);
	const [courseDuration, setCourseDuration] = useState(0);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [author, setAuthor] = useState({});
	const [courseAuthor, setCourseAuthor] = useState([]);
	const [isContentShow, setIsContentShow] = useState(true);

	const addNewCourse = (e) => {
		e.preventDefault();

		setIsContentShow(false);

		const courseDurationFormatted = formatDuration(0);
		setCourseDuration(courseDurationFormatted);
	};

	const handleCreateCourseChange = (e) => {
		const { name, value } = e.target;

		if (name === 'duration') {
			const courseDurationFormatted = formatDuration(value);

			setCourseDuration(courseDurationFormatted);
		}

		if (name === 'author') {
			setAuthor(value);
		}
	};

	const handleKeyDown = (e) => {
		const { name } = e.target;

		if (
			e.key === 'Backspace' ||
			e.key === 'Delete' ||
			e.key === 'Tab' ||
			e.key === 'Alt'
		) {
			return;
		}

		if (name === 'duration') {
			if (!regexpNumber.test(Number(e.key))) {
				alert('Please, fill in only numbers!');
				return;
			}
		}
	};

	const handleSearchChange = (e) => {
		setSearchedCourse(e.target.value);

		if (e.target.value === '') {
			setCourses([...courses, ...mockedCoursesList]);
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

		if (searchedCourse.length === 0) {
			alert('Please, fill in search field!');
			return;
		}

		const searchedCourseFormatted = searchedCourse.toLowerCase();

		const coursesFiltered = courses.filter((item) =>
			findCourse(searchedCourseFormatted, item)
		);

		setCourses(coursesFiltered);
	};

	const createNewAuthor = (e) => {
		e.preventDefault();

		const newAuthor = {
			id: uuidv4(),
			name: author,
		};

		if (typeof newAuthor.name !== 'string') {
			alert('Please fill in author name field!');
			return;
		}

		if (newAuthor.name.length < 3) {
			alert('Author field length should be more than 2 characters!');
			return;
		}

		setAuthor(newAuthor);
		setAuthorsList([...authorsList, newAuthor]);
	};

	const addCourseAuthor = (e, id) => {
		e.preventDefault();

		const name = e.target.parentElement.previousElementSibling.innerText;
		const author = {
			id,
			name,
		};
		const authorsListAfterDelete = authorsList.filter(
			(author) => author.id !== id
		);

		setAuthorsList(authorsListAfterDelete);
		setCourseAuthor([...courseAuthor, author]);
	};

	const deleteCourseAuthor = (e, id) => {
		e.preventDefault();

		const authorAfterDelete = courseAuthor.filter((author) => author.id !== id);
		const authorDeleted = courseAuthor.find((item) => item.id === id);

		setAuthorsList([...authorsList, authorDeleted]);
		setCourseAuthor(authorAfterDelete);
	};

	const createNewCourse = (e) => {
		e.preventDefault();

		const createCourseForm = document.getElementById('createCourseForm');
		const courseFormElements = Array.from(createCourseForm.elements);
		let courseFormInputs = courseFormElements.filter(
			(item) => item.localName !== 'button' && item.id !== 'addCourse'
		);
		let titleInput = courseFormInputs.find((item) => item.name === 'title');
		let authorInput = courseFormInputs.find((item) => item.name === 'author');
		let durationInput = courseFormInputs.find(
			(item) => item.name === 'duration'
		);

		if (!authorInput && courseFormInputs.some((item) => item.value === '')) {
			alert('Please, fill in all fields');
			return;
		} else if (titleInput.value.length < 3) {
			alert('Title field length should be more than 2 characters!');
			return;
		} else if (Number(durationInput.value) === 0) {
			alert(
				'Duration can not be equal to 0. Please, fill in duration in minutes'
			);
			return;
		} else {
			courseFormInputs = courseFormInputs.map((item) => {
				if (item.name === 'author') return null;
				return {
					id: uuidv4(),
					[item.name]: item.value,
					creationDate: Date.parse(new Date()),
				};
			});
		}

		const authorsList = [];

		courseAuthor.forEach((item) => {
			if (item.id) {
				authorsList.push(item.id);
			}
		});

		const courseFormData = Object.assign({}, ...courseFormInputs, {
			authors: authorsList,
		});

		if (courseFormData.authors.length === 0) {
			alert('Please add some author!');
			return;
		}

		setCourses([...courses, courseFormData]);

		setCourseAuthor([]);
		setAuthorsList(mockedAuthorsList);

		setIsContentShow(true);
	};

	return (
		<div className='container'>
			{isContentShow ? (
				<>
					<Wrapper>
						<SearchBar
							valueSearched={searchedCourse}
							handleChange={handleSearchChange}
							handleSubmit={handleSearchSubmit}
						/>
						<Button
							buttonType='button'
							buttonText='Add new course'
							onClick={addNewCourse}
						/>
					</Wrapper>
					<Content>
						<CoursesList courses={courses} authorsList={authorsList} />
					</Content>
				</>
			) : (
				<CreateCourse
					courses={courses}
					handleChange={handleCreateCourseChange}
					handleKeyDown={handleKeyDown}
					courseDuration={courseDuration}
					authors={authorsList}
					courseAuthor={courseAuthor}
					addCourseAuthor={addCourseAuthor}
					deleteCourseAuthor={deleteCourseAuthor}
					createNewAuthor={createNewAuthor}
					createNewCourse={createNewCourse}
				/>
			)}
		</div>
	);
};

export default Courses;
