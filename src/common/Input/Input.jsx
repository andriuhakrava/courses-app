import React from 'react';

import { InputStyled } from './Input.style.js';

const Input = ({
	inputType,
	inputName,
	minValue,
	labelText,
	inputPlaceholder,
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
				onChange={onChange}
			></textarea>
		) : (
			<input
				type={inputType}
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				onChange={onChange}
			/>
		)}
	</InputStyled>
);

export default Input;
