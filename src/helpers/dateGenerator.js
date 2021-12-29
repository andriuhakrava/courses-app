import addZero from './addZero';

export const formatDate = (creationDate) => {
	let dateFormatted;

	const day = creationDate.slice(0, 2);
	const month = creationDate.slice(3, 5);
	const year = creationDate.slice(6);

	dateFormatted = addZero(day) + '.' + addZero(month) + '.' + year;

	return dateFormatted;
};

export default formatDate;
