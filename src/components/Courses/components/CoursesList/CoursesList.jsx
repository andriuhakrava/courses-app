import PropTypes from 'prop-types';

import CourseCard from '../CourseCard/CourseCard.jsx';

const CoursesList = ({ courses }) => {
	const coursesList = courses.map((course) => (
		<CourseCard key={course.id} course={course} />
	));

	return coursesList;
};

CoursesList.propTypes = {
	courses: PropTypes.array.isRequired,
};

export default CoursesList;
