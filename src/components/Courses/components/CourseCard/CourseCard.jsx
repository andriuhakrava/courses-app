import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import formatDate from '../../../../helpers/dateGenerator';
import formatDuration from '../../../../helpers/pipeDuration';

import { Content } from './CourseCard.style.js';

import Button from '../../../../common/Button/Button.jsx';

const CourseCard = ({ authorsMockedList, course }) => {
	const { id, title, description, authors, duration, creationDate } = course;

	const [courseDuration, setCourseDuration] = useState(duration);
	const [courseCreationDate, setCourseCreationDate] = useState(creationDate);
	const [courseAuthors, setCourseAuthors] = useState('');

	const navigate = useNavigate();

	const showCourseInfo = () => {
		navigate(`/courses/${id}`);
	};

	const findAuthors = (authors, authorsMockedList) => {
		const filteredArray = authorsMockedList.reduce((arr, item) => {
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

	useEffect(() => {
		const courseCardAuthors = findAuthors(authors, authorsMockedList);
		const courseCardAuthorsFormatted = formatAuthors(courseCardAuthors);

		setCourseAuthors(courseCardAuthorsFormatted);
	}, [authors, authorsMockedList]);

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
				<Button
					buttonType='button'
					buttonText='Show course'
					onClick={showCourseInfo}
				/>
			</div>
		</Content>
	);
};

export default CourseCard;
