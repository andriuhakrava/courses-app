export const formatDate = (creationDate) => {
	let dateFormatted = new Date(creationDate);

	dateFormatted =
		dateFormatted.getMonth() +
		1 +
		'.' +
		dateFormatted.getDate() +
		'.' +
		dateFormatted.getFullYear();

	return dateFormatted;
};

export default formatDate;
