import React from 'react';
import { Outlet } from 'react-router';

import Header from '../../components/Header/Header.jsx';

const Layout = () => (
	<>
		<Header />
		<Outlet />
	</>
);

export default Layout;
