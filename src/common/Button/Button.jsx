import React from 'react';

import { ButtonStyled } from './Button.style.js';

const Button = ({ buttonType, buttonText, onClick }) => (
	<ButtonStyled type={buttonType} onClick={onClick}>
		{buttonText}
	</ButtonStyled>
);

export default Button;
