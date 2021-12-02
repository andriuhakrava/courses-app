import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';

import { HeaderStyled, Content } from './Header.style.js';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

const Header = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	const getToken = () => {
		if (localStorage.getItem('userToken')) {
			setIsAuthenticated(true);
		}
	};

	const logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('userToken');
		setIsAuthenticated(false);
		navigate('/login');
	};

	useEffect(() => {
		getToken();
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
									<span>Andrii</span>
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
