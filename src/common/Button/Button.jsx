import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.style.js';

const Button = ({
	buttonType,
	buttonText,
	buttonImage,
	buttonImageText,
	onClick,
}) => {
	if (buttonImage) {
		return (
			<ButtonStyled type={buttonType} onClick={onClick}>
				<img src={buttonImage} alt={buttonImageText} />
			</ButtonStyled>
		);
	}

	return (
		<ButtonStyled type={buttonType} onClick={onClick}>
			{buttonText}
		</ButtonStyled>
	);
};

Button.propTypes = {
	buttonType: PropTypes.string.isRequired,
	buttonText: PropTypes.string,
	buttonImage: PropTypes.string,
	buttonImageText: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
