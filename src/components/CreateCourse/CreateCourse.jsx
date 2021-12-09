import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { v4 as uuidv4 } from 'uuid';

import formatDuration from '../../helpers/pipeDuration';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import { Wrapper, Content } from './CreateCourse.style.js';

import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

const CreateCourse = () => {
	const courseDurationDefault = '00:00';
	const [newCourse, setNewCourse] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: Date.parse(new Date()),
		duration: 0,
		authors: [],
	});

	const [courseDuration, setCourseDuration] = useState(courseDurationDefault);

	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [author, setAuthor] = useState({});

	const navigate = useNavigate();

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

		const author = authorsList.find((el) => el.id === id);
		const authorsListAfterAdd = authorsList.filter(
			(author) => author.id !== id
		);

		setAuthorsList(authorsListAfterAdd);
		setNewCourse((prevState) => {
			return {
				...newCourse,
				authors: [...prevState.authors, author],
			};
		});
	};

	const deleteCourseAuthor = (e, id) => {
		e.preventDefault();

		const authorDeleted = newCourse.authors.find((el) => el.id === id);
		const courseAuthors = newCourse.authors.filter(
			(el) => el !== authorDeleted
		);

		setAuthorsList([...authorsList, authorDeleted]);
		setNewCourse({
			...newCourse,
			authors: courseAuthors,
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewCourse({
			...newCourse,
			[name]: value,
		});

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
			setAuthor(value);
		}
	};

	const handleSubmit = (e) => {
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

		mockedCoursesList.push(course);

		navigate(`/courses`);
	};

	return (
		<Wrapper>
			<Content>
				<form id='createCourseForm' onSubmit={handleSubmit}>
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
								<Button buttonType='submit' buttonText='Create Course' />
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
									value={author}
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
								{authorsList.length ? (
									authorsList.map((item) => (
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
								{newCourse.authors.length ? (
									newCourse.authors.map((author) => (
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

export default CreateCourse;
