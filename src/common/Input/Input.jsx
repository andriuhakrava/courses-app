import React from 'react';

import { InputStyled } from './Input';

const Input = ({
	inputType,
	inputName,
	inputValue,
	labelText,
	inputPlaceholder,
	onChange,
	onKeyDown,
}) => (
	<InputStyled>
		{labelText && <label htmlFor={inputName}>{labelText}</label>}
		{inputType === 'textarea' && (
			<textarea
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				rows='3'
				onChange={onChange}
			></textarea>
		)}
		{inputType === 'text' && (
			<input
				type={inputType}
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				onChange={onChange}
			/>
		)}
		{inputType === 'number' && (
			<input
				type={inputType}
				id={inputName}
				name={inputName}
				placeholder={inputPlaceholder}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		)}
		{inputType === 'submit' && (
			<input
				type={inputType}
				id={inputName}
				name={inputName}
				value={inputValue}
			/>
		)}
	</InputStyled>
);

export default Input;
