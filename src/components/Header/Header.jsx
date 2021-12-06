import { useNavigate } from 'react-router';

import {
	getToken,
	getUserName,
	removeToken,
	removeUserName,
} from '../../helpers/localStorageHandler.js';

import { HeaderStyled, Content } from './Header.style.js';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

const Header = () => {
	const navigate = useNavigate();

	const token = getToken();
	const user = getUserName();

	const logOut = (e) => {
		e.preventDefault();

		removeToken();
		removeUserName();

		navigate('/login');
	};

	return (
		<HeaderStyled>
			<div className='container'>
				<Content>
					<Logo></Logo>
					<div className='header__content'>
						<span>
							{token && (
								<div className='header__content'>
									<span>{user}</span>
									<form>
										<Button
											buttonType='button'
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
