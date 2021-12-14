import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getCourses } from '../../../../store/courses/selectors.js';
import { getAuthors } from '../../../../store/authors/selectors.js';

import formatDuration from '../../../../helpers/pipeDuration.js';

import { Wrapper, Content } from './CourseInfo.style.js';

import Button from '../../../../common/Button/Button.jsx';

const CourseInfo = () => {
	const { courseId } = useParams();
	const navigate = useNavigate();
	const [courseDuration, setCourseDuration] = useState(0);
	const [courseAuthor, setCourseAuthor] = useState([]);

	const backToCourses = () => {
		navigate('/courses');
	};

	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	const course = coursesList.filter((item) => item.id === courseId)[0];

	let title, description, duration, creationDate, authors;

	useEffect(() => {
		if (!course) return;
		const durationFormatted = formatDuration(duration);

		setCourseDuration(durationFormatted);
	}, [course, duration]);

	useEffect(() => {
		if (!course) return;
		const courseAuthorName = authorsList.reduce((arr, item) => {
			if (authors.includes(item.id)) {
				arr.push(item.name);
			}
			return arr;
		}, []);

		setCourseAuthor(courseAuthorName);
	}, [authorsList, course, authors]);

	const courseInfoAbsentMessage =
		'Course does not exist... Please check your url.';
	const courseInfoNotExist = (
		<Content>
			<div className='course__absent'>
				<p>{courseInfoAbsentMessage}</p>
				<Link to='/courses'>
					<Button
						buttonType='button'
						buttonText='< Back to courses'
						onClick={backToCourses}
					/>
				</Link>
			</div>
		</Content>
	);

	if (typeof course === 'object') {
		({ title, description, duration, creationDate, authors } = course);
	} else {
		return courseInfoNotExist;
	}

	return (
		<Wrapper>
			<Content>
				<Link to='/courses'>
					<Button
						buttonType='button'
						buttonText='< Back to courses'
						onClick={backToCourses}
					/>
				</Link>
				<>
					<h2>{title}</h2>
					<div className='course-info'>
						<div className='course-info__description'>{description}</div>
						<div className='course-info__parameters'>
							<div className='course-info__item'>
								<h3 className='course-info__title'>ID:</h3>
								<span>{courseId}</span>
							</div>
							<div className='course-info__item'>
								<h3 className='course-info__title'>Duration:</h3>
								<span>{courseDuration} hours</span>
							</div>
							<div className='course-info__item'>
								<h3 className='course-info__title'>Created:</h3>
								<span>{creationDate}</span>
							</div>
							<div className='course-info__item'>
								<h3 className='course-info__title'>Authors:</h3>
								<div className='course-info__authors'>
									{courseAuthor.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			</Content>
		</Wrapper>
	);
};

export default CourseInfo;
