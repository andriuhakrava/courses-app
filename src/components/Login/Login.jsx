import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Wrapper } from './Login.style.js';
import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

const Login = () => {
	const [user, setUser] = useState({ email: '', password: '' });
	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (Object.values(user).some((item) => item === '')) {
			alert('Please fill in all fields!');
			return;
		}

		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (response.status === 201) {
			if (result.successful) {
				navigate('/courses');
				localStorage.setItem('userToken', result.result);
			}
		} else {
			alert('Please fill in right email or password!');
			return;
		}
	};

	return (
		<Wrapper>
			<form className='user-form' onSubmit={handleSubmit}>
				<h2 className='user-form__title'>Login</h2>
				<div className='user-form__row'>
					<Input
						inputType='email'
						inputName='email'
						inputPlaceholder='Enter email'
						labelText='Email'
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				<div className='user-form__row'>
					<Input
						inputType='password'
						inputName='password'
						inputPlaceholder='Enter password'
						labelText='Password'
						value={user.password}
						onChange={handleChange}
					/>
				</div>
				<div className='user-form__row'>
					<Button buttonType='submit' buttonText='Login' />
				</div>
				<div className='user-form__account-info'>
					<p>
						If you not have an account you can{' '}
						<Link to='/registration'>Register</Link>
					</p>
				</div>
			</form>
		</Wrapper>
	);
};

export default Login;
