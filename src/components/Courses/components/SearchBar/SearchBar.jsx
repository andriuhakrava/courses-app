import React from 'react';

import { Wrapper } from './SearchBar';

import Input from '../../../../common/Input/Input.jsx';
import Button from '../../../../common/Button/Button.jsx';

const SearchBar = ({ valueSearched, handleChange, handleSubmit }) => (
	<Wrapper>
		<form onSubmit={handleSubmit}>
			<Input
				inputType='text'
				labelText=''
				inputName='courseName'
				inputPlaceholder='Enter course name or id...'
				value={valueSearched}
				onChange={handleChange}
			/>
			<Button buttonType='submit' buttonText='Search' />
		</form>
	</Wrapper>
);

export default SearchBar;
