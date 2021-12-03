import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.style.js';

const Button = ({ buttonType, buttonText, onClick }) => (
	<ButtonStyled type={buttonType} onClick={onClick}>
		{buttonText}
	</ButtonStyled>
);

Button.propTypes = {
	buttonType: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default Button;
