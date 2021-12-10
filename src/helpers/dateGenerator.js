import addZero from './addZero';

export const formatDate = (creationDate) => {
	let dateFormatted = new Date(creationDate);

	dateFormatted =
		addZero(dateFormatted.getMonth() + 1) +
		'.' +
		addZero(dateFormatted.getDate()) +
		'.' +
		dateFormatted.getFullYear();

	return dateFormatted;
};

export default formatDate;
