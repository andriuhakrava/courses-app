import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Wrapper } from './Registration';
import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

const Registration = () => {
	const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (Object.values(newUser).some((item) => item === '')) {
			alert('Please fill in all fields!');
			return;
		}

		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (response.status === 201) {
			if (result.successful) {
				navigate('/login');
			}
		} else {
			alert(result.errors[0]);
			return;
		}
	};

	return (
		<Wrapper>
			<form className='user-form' onSubmit={handleSubmit}>
				<h2 className='user-form__title'>Registration</h2>
				<div className='user-form__row'>
					<Input
						inputType='text'
						inputName='name'
						inputPlaceholder='Enter name'
						labelText='Name'
						value={newUser.name}
						onChange={handleChange}
					/>
				</div>
				<div className='user-form__row'>
					<Input
						inputType='email'
						inputName='email'
						inputPlaceholder='Enter email'
						labelText='Email'
						value={newUser.email}
						onChange={handleChange}
					/>
				</div>
				<div className='user-form__row'>
					<Input
						inputType='password'
						inputName='password'
						inputPlaceholder='Enter password'
						labelText='Password'
						value={newUser.password}
						onChange={handleChange}
					/>
				</div>
				<div className='user-form__row'>
					<Button buttonType='submit' buttonText='Registration' />
				</div>
				<div className='user-form__account-info'>
					<p>
						If you have an account you can <Link to='/login'>Login</Link>
					</p>
				</div>
			</form>
		</Wrapper>
	);
};

export default Registration;
