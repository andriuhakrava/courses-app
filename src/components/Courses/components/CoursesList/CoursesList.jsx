import React from 'react';

import CourseCard from '../CourseCard/CourseCard.jsx';

const CoursesList = ({ courses, authorsList }) => {
	const coursesList = courses.map((course) => (
		<CourseCard
			key={course.id}
			title={course.title}
			description={course.description}
			authors={course.authors}
			authorsMockedList={authorsList}
			duration={course.duration}
			creationDate={course.creationDate}
			courses={courses}
		/>
	));

	return coursesList;
};

export default CoursesList;
