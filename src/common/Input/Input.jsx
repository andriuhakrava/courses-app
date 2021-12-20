import React from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './Input.style.js';

const Input = ({
	inputType,
	inputName,
	labelText,
	inputPlaceholder,
	inputValue,
	onChange,
}) => (
	<InputStyled>
		{labelText && <label htmlFor={inputName}>{labelText}</label>}
		{inputType === 'textarea' ? (
			<textarea
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				rows='3'
				value={inputValue}
				onChange={onChange}
			></textarea>
		) : (
			<input
				type={inputType}
				value={inputValue}
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				onChange={onChange}
			/>
		)}
	</InputStyled>
);

Input.propTypes = {
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	inputPlaceholder: PropTypes.string.isRequired,
	inputValue: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.number.isRequired,
	]),
	onChange: PropTypes.func,
};

export default Input;
