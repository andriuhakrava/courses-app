import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import page404 from '../../assets/page404.png';

import { Wrapper } from './NotFoundPage.style.js';

import Button from '../../common/Button/Button.jsx';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const backHome = () => {
		navigate('/courses');
	};

	return (
		<Wrapper style={{ backgroundImage: 'url(' + page404 + ')' }}>
			<Link to='/courses'>
				<Button
					buttonType='button'
					buttonText='< Back to courses'
					onClick={backHome}
				/>
			</Link>
		</Wrapper>
	);
};

export default NotFoundPage;
