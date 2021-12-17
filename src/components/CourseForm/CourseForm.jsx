import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import formatDuration from '../../helpers/pipeDuration';

import { getAuthors } from '../../store/authors/selectors.js';
import { getCourseById } from '../../store/courses/selectors.js';

import { addCourseThunk, editCourseThunk } from '../../store/courses/thunk';
import { addAuthorThunk } from '../../store/authors/thunk';

import { Wrapper, Content } from './CourseForm.style.js';

import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

const CourseForm = () => {
	const courseDurationDefault = '00:00';
	const { courseId } = useParams();

	const coursePrefilled = useSelector((state) =>
		getCourseById(state, courseId)
	);

	const [newCourse, setNewCourse] = useState({
		title: '',
		description: '',
		creationDate: Date.parse(new Date()),
		duration: 0,
		authors: [],
	});

	useEffect(() => {
		console.log('COURSE PREFILLED!', coursePrefilled);
		if (coursePrefilled) {
			setNewCourse({
				title: coursePrefilled.title,
				description: coursePrefilled.description,
				creationDate: coursePrefilled.creationDate,
				duration: coursePrefilled.duration,
				authors: coursePrefilled.authors,
			});
		}
		// eslint-disable-next-line
	}, []);

	console.log('NEW COURSE PREFILLED', newCourse);

	const [courseDuration, setCourseDuration] = useState(courseDurationDefault);

	const [authorNew, setAuthorNew] = useState('');

	const authorsList = useSelector(getAuthors);
	const dispatch = useDispatch();

	const [authorsRenderList, setAuthorsRenderList] = useState(authorsList);
	const [courseAuthorsRenderList, setCourseAuthorsRenderList] = useState([]);

	const navigate = useNavigate();

	const createNewAuthor = (e) => {
		e.preventDefault();

		const data = {
			name: authorNew,
		};

		if (typeof data.name !== 'string') {
			alert('Please fill in author name field!');
			return;
		}

		if (data.name.length < 3) {
			alert('Author field length should be more than 2 characters!');
			return;
		}

		dispatch(addAuthorThunk(data));
		setAuthorsRenderList([...authorsRenderList, data]);
	};

	const addCourseAuthor = (e, id) => {
		e.preventDefault();

		const authorAdded = authorsRenderList.find((el) => el.id === id);
		const authorsListAfterAdd = authorsRenderList.filter(
			(author) => author !== authorAdded
		);

		setAuthorsRenderList(authorsListAfterAdd);
		setCourseAuthorsRenderList([...courseAuthorsRenderList, authorAdded]);

		setNewCourse((prevState) => {
			return {
				...newCourse,
				authors: [...prevState.authors, authorAdded],
			};
		});
	};

	const deleteCourseAuthor = (e, id) => {
		e.preventDefault();

		const authorDeleted = newCourse.authors.find((el) => el.id === id);
		const courseAuthors = newCourse.authors.filter(
			(el) => el !== authorDeleted
		);

		const renderAfterDelete = courseAuthorsRenderList.filter(
			(el) => el !== authorDeleted
		);

		setAuthorsRenderList([...authorsRenderList, authorDeleted]);
		setCourseAuthorsRenderList([...renderAfterDelete]);

		setNewCourse((prevState) => {
			return {
				...newCourse,
				authors: [...prevState.authors, courseAuthors],
			};
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name !== 'author') {
			setNewCourse({
				...newCourse,
				[name]: value,
			});
		}

		if (name === 'duration') {
			if (+value < 0) return;

			const courseDurationFormatted = formatDuration(value);

			setCourseDuration(courseDurationFormatted);
			setNewCourse({
				...newCourse,
				duration: +value,
			});
		}

		if (name === 'author') {
			setAuthorNew(value);
		}
	};

	const createCourse = (e) => {
		e.preventDefault();

		if (newCourse.title.length === 0 || newCourse.description.length === 0) {
			alert('Please, fill in all fields');
			return;
		}

		if (newCourse.description.length < 3) {
			alert('Description field length must be more than 2 characters!');
			return;
		}

		if (newCourse.duration === 0 || newCourse.duration < 0) {
			alert(
				'Duration can not be equal to 0 or lower than 0. Please, fill in duration in minutes'
			);
			return;
		}

		if (newCourse.authors.length === 0) {
			alert('Please add course author!');
			return;
		}

		const course = {
			...newCourse,
			authors: newCourse.authors.map((item) => item.id),
		};

		dispatch(addCourseThunk(course));

		navigate(`/courses`);
	};

	const editCourse = (e) => {
		e.preventDefault();

		dispatch(editCourseThunk(newCourse));

		console.log('EDIT!!!');
	};

	return (
		<Wrapper>
			<Content>
				<form
					id='createCourseForm'
					onSubmit={!coursePrefilled ? createCourse : editCourse}
				>
					<div className='course-info'>
						<div className='course-info__row'>
							<div className='course-info__col course-info__col--halfsize'>
								<Input
									inputType='text'
									inputName='title'
									inputPlaceholder='Enter title...'
									labelText='Title'
									value={newCourse.title}
									onChange={handleChange}
								/>
							</div>
							<div className='course-info__col course-info__col--endcontent'>
								{coursePrefilled ? (
									<Button buttonType='submit' buttonText='Edit Course' />
								) : (
									<Button buttonType='submit' buttonText='Create Course' />
								)}
							</div>
						</div>
						<div className='course-info__row course-info__row--full'>
							<div className='course-info__col'>
								<Input
									inputType='textarea'
									inputName='description'
									inputPlaceholder='Enter description'
									labelText='Description'
									value={newCourse.description}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='course-info__row'>
							<div className='course-info__col pr-25'>
								<h3>Add author</h3>
								<Input
									inputType='text'
									inputName='author'
									inputPlaceholder='Enter author name...'
									labelText='Author name'
									value={authorNew}
									onChange={handleChange}
								/>
								<Button
									buttonType='submit'
									buttonText='Create author'
									onClick={createNewAuthor}
								/>
							</div>
							<div className='course-info__col course-info__col--centercontent pl-25'>
								<h3>Authors</h3>
								{authorsRenderList.length ? (
									authorsRenderList.map((item) => {
										return (
											<div className='course-info__row' key={item.id}>
												<div className='course-info__col'>{item.name}</div>
												<div className='course-info__col'>
													<Button
														buttonType='submit'
														buttonText='Add author'
														onClick={(e) => addCourseAuthor(e, item.id)}
													/>
												</div>
											</div>
										);
									})
								) : (
									<div className='course-info__row course-info__row--full'>
										<div className='course-info__col course-info__col--centercontent'>
											Author list is empty
										</div>
									</div>
								)}
							</div>
						</div>
						<div className='course-info__row'>
							<div className='course-info__col pr-25'>
								<h3>Duration</h3>
								<Input
									inputType='number'
									inputName='duration'
									inputPlaceholder='Enter duration in minutes...'
									labelText='Duration'
									value={newCourse.duration}
									onChange={handleChange}
								/>
								<div className='course-info__row course-info__row--full'>
									<p className='course-info__duration'>
										Duration: <span>{courseDuration}</span> hours
									</p>
								</div>
							</div>
							<div className='course-info__col course-info__col--centercontent pl-25'>
								<h3>Course authors</h3>
								{courseAuthorsRenderList.length ? (
									courseAuthorsRenderList.map((author) => (
										<div className='course-info__row' key={author.id}>
											<div className='course-info__col'>{author.name}</div>
											<div className='course-info__col course-info__col--startcontent pl-25'>
												<Button
													buttonType='submit'
													buttonText='Delete author'
													onClick={(e) => deleteCourseAuthor(e, author.id)}
												/>
											</div>
										</div>
									))
								) : (
									<div className='course-info__row course-info__row--full'>
										<div className='course-info__col course-info__col--centercontent'>
											Author list is empty
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</form>
			</Content>
		</Wrapper>
	);
};

export default CourseForm;
