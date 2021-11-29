import React, { useState, useEffect } from 'react';

import formatDate from '../../../../helpers/dateGenerator';
import formatDuration from '../../../../helpers/pipeDuration';

import { Content } from './CourseCard.style.js';

import Button from '../../../../common/Button/Button.jsx';

const CourseCard = ({
	title,
	description,
	authors,
	authorsMockedList,
	duration,
	creationDate,
}) => {
	const [courseDuration, setCourseDuration] = useState(duration);
	const [courseCreationDate, setCourseCreationDate] = useState(creationDate);
	const [courseAuthors, setCourseAuthors] = useState('');

	const findAuthors = (authors, authorsMockedList) => {
		const filteredArray = [];

		for (let i = 0; i < authorsMockedList.length; i++) {
			for (let j = 0; j < authors.length; j++) {
				if (authors[j] === authorsMockedList[i].id) {
					filteredArray.push(authorsMockedList[i]);
				}
			}
		}

		return filteredArray;
	};

	const formatAuthors = (authors) => {
		let authorsFormatted = [];

		authors.forEach((author) => {
			authorsFormatted.push(author.name);
		});

		authorsFormatted = authorsFormatted.join(', ');

		return authorsFormatted;
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
				<Button buttonText='Show course' />
			</div>
		</Content>
	);
};

export default CourseCard;
