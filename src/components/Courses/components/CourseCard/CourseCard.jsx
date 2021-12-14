import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthors } from '../../../../store/authors/selectors.js';

import formatDate from '../../../../helpers/dateGenerator';
import formatDuration from '../../../../helpers/pipeDuration';

import { courseDeleted } from '../../../../store/courses/actionCreators.js';

import { Content } from './CourseCard.style.js';
import iconEdit from '../../../../assets/icon-edit.png';
import iconDelete from '../../../../assets/icon-delete.png';

import Button from '../../../../common/Button/Button.jsx';

const CourseCard = ({ course }) => {
	const { id, title, description, authors, duration, creationDate } = course;
	const [courseDuration, setCourseDuration] = useState(duration);
	const [courseCreationDate, setCourseCreationDate] = useState(creationDate);
	const [courseAuthors, setCourseAuthors] = useState('');

	const dispatch = useDispatch();
	const authorsList = useSelector(getAuthors);

	const navigate = useNavigate();

	const showCourseInfo = () => {
		navigate(`/courses/${id}`);
	};

	const findAuthors = (authors, authorsList) => {
		const filteredArray = authorsList.reduce((arr, item) => {
			if (authors.includes(item.id)) {
				arr.push(item);
			}
			return arr;
		}, []);

		return filteredArray;
	};

	const formatAuthors = (authors) => {
		let authorsFormatted = [];

		authors.forEach((author) => {
			authorsFormatted.push(author.name);
		});

		return authorsFormatted.join(', ');
	};

	const editCourse = () => {
		return true;
	};

	const deleteCourse = () => {
		dispatch(courseDeleted(id));
	};

	useEffect(() => {
		const courseCardAuthors = findAuthors(authors, authorsList);
		const courseCardAuthorsFormatted = formatAuthors(courseCardAuthors);

		setCourseAuthors(courseCardAuthorsFormatted);
	}, [authors, authorsList]);

	useEffect(() => {
		const durationFormatted = formatDuration(duration);

		setCourseDuration(durationFormatted);
	}, [duration]);

	useEffect(() => {
		const dateFormatted = formatDate(creationDate);

		setCourseCreationDate(dateFormatted);
	}, [creationDate]);

	return (
		<Content>
			<div className='course-description'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='course-parameters'>
				<div className='course-parameters__item course-parameters__item--fixedcut'>
					<h3>Authors:</h3>
					<span className='course-parameters__authors'>{courseAuthors}</span>
				</div>
				<div className='course-parameters__item'>
					<h3>Duration:</h3>
					<span>{courseDuration} hours</span>
				</div>
				<div className='course-parameters__item'>
					<h3>Created:</h3>
					<span>{courseCreationDate}</span>
				</div>
				<div className='course-parameters__btn-row'>
					<Button
						buttonType='button'
						buttonText='Show course'
						onClick={showCourseInfo}
					/>
					<Button
						buttonType='button'
						buttonText=''
						buttonImage={iconEdit}
						buttonImageText='icon-edit'
						onClick={editCourse}
					/>
					<Button
						buttonType='button'
						buttonText=''
						buttonImage={iconDelete}
						buttonImageText='icon-delete'
						onClick={deleteCourse}
					/>
				</div>
			</div>
		</Content>
	);
};

CourseCard.propTypes = {
	course: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		authors: PropTypes.arrayOf(PropTypes.string).isRequired,
		duration: PropTypes.number.isRequired,
		creationDate: PropTypes.string.isRequired,
	}).isRequired,
};

export default CourseCard;
