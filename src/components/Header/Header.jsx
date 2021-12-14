import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getAuthenticatedToken } from '../../store/user/selectors.js';
import { getAuthenticatedUserName } from '../../store/user/selectors.js';
import { logOutUser } from '../../store/user/actionCreators.js';

import { HeaderStyled, Content } from './Header.style.js';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

const Header = () => {
	const navigate = useNavigate();

	const token = useSelector(getAuthenticatedToken);
	const userName = useSelector(getAuthenticatedUserName);

	const dispatch = useDispatch();

	const logOut = (e) => {
		e.preventDefault();

		dispatch(logOutUser());

		navigate('/login');
	};

	return (
		<HeaderStyled>
			<div className='container'>
				<Content>
					<Link to='/courses'>
						<Logo />
					</Link>
					<div className='header__content'>
						<span>
							{token && (
								<div className='header__content'>
									<span>{userName}</span>
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
