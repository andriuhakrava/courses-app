import React from 'react';

import { ButtonStyled } from './Button';

const Button = ({ buttonType, buttonText, onClick }) => (
	<ButtonStyled type={buttonType} onClick={onClick}>
		{buttonText}
	</ButtonStyled>
);

export default Button;
