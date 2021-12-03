import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';

import { HeaderStyled, Content } from './Header.style.js';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

const Header = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();

	const getToken = () => {
		const token = localStorage.getItem('userToken');

		if (token) {
			setIsAuthenticated(true);
		}
	};

	const getUserName = () => {
		const user = localStorage.getItem('userName');

		if (user) {
			setUserName(user);
		}
	};

	const logOut = (e) => {
		e.preventDefault();

		localStorage.removeItem('userToken');
		localStorage.removeItem('userName');

		setIsAuthenticated(false);
		setUserName('');

		navigate('/login');
	};

	useEffect(() => {
		getToken();
		getUserName();
	});

	return (
		<HeaderStyled>
			<div className='container'>
				<Content>
					<Logo></Logo>
					<div className='header__content'>
						<span>
							{isAuthenticated && (
								<div className='header__content'>
									<span>{userName}</span>
									<form>
										<Button
											type='button'
											buttonText='Logout'
											onClick={logOut}
										/>
									</form>
								</div>
							)}
						</span>
					</div>
				</Content>
			</div>
		</HeaderStyled>
	);
};

export default Header;
