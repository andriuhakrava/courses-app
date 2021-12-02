import React from 'react';

import { mockedAuthorsList } from '../../../../constants';

import CourseCard from '../CourseCard/CourseCard.jsx';

const CoursesList = ({ courses }) => {
	const coursesList = courses.map((course) => (
		<CourseCard
			key={course.id}
			authorsMockedList={mockedAuthorsList}
			course={course}
		/>
	));

	return coursesList;
};

export default CoursesList;
