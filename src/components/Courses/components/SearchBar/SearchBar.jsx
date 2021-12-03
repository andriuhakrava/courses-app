import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './SearchBar.style.js';

import Input from '../../../../common/Input/Input.jsx';
import Button from '../../../../common/Button/Button.jsx';

const SearchBar = ({ handleChange, handleSubmit }) => (
	<Wrapper>
		<form onSubmit={handleSubmit}>
			<Input
				inputType='text'
				labelText=''
				inputName='courseName'
				inputPlaceholder='Enter course name or id...'
				onChange={handleChange}
			/>
			<Button buttonType='submit' buttonText='Search' />
		</form>
	</Wrapper>
);

SearchBar.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
