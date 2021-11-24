import addZero from './addZero';

const formatDuration = (duration) => {
	console.log('DURATION', duration);
	return (
		addZero(Math.floor(duration / 60)) +
		':' +
		addZero(Math.floor(duration % 60))
	);
};

export default formatDuration;
