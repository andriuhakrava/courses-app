import React from 'react';

import { HeaderStyled, Content } from './Header';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

const Header = () => (
	<HeaderStyled>
		<div className='container'>
			<Content>
				<Logo></Logo>
				<div className='header__content'>
					<span>Andrii</span>
					<form>
						<Button type='submit' buttonText='Logout' />
					</form>
				</div>
			</Content>
		</div>
	</HeaderStyled>
);

export default Header;
