export const getCourses = (state) => state.courses;
export const getCourseById = (state, courseId) =>
	state.courses.find((item) => item.id === courseId);
