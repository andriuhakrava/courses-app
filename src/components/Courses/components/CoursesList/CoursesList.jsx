import React from 'react';

import CourseCard from '../CourseCard/CourseCard.jsx';

const CoursesList = ({ courses, authorsList }) => {
	const coursesList = courses.map((course) => (
		<CourseCard
			key={course.id}
			authorsMockedList={authorsList}
			course={course}
		/>
	));

	return coursesList;
};

export default CoursesList;
