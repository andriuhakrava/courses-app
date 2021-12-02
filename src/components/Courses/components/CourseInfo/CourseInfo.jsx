import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Link, useParams } from 'react-router-dom';

import { mockedCoursesList, mockedAuthorsList } from '../../../../constants';
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

	const course = mockedCoursesList.filter((item) => item.id === courseId);

	const { title, description, duration, creationDate, authors } = course[0];

	useEffect(() => {
		const durationFormatted = formatDuration(duration);

		setCourseDuration(durationFormatted);
	}, [duration]);

	useEffect(() => {
		const courseAuthorName = mockedAuthorsList.reduce((arr, item) => {
			if (authors.includes(item.id)) {
				arr.push(item.name);
			}
			return arr;
		}, []);

		setCourseAuthor(courseAuthorName);
	}, [authors]);

	return (
		<Wrapper>
			<Content>
				<Link to='/courses'>
					<Button
						type='button'
						buttonText='< Back to courses'
						onClick={backToCourses}
					/>
				</Link>
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
			</Content>
		</Wrapper>
	);
};

export default CourseInfo;
