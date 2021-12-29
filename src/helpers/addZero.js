const addZero = (value) =>
	value < 10 && value[0] !== '0' ? `0${value}` : value;

export default addZero;
