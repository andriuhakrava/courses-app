import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    getAuthenticatedToken,
    getRoleAdmin,
} from '../../store/user/selectors.js';

const PrivateRoute = ({ component: Component }) => {
    const token = useSelector(getAuthenticatedToken);
    const isRoleAdmin = useSelector(getRoleAdmin);

    if (isRoleAdmin && token) {
        return <Component />;
    }

    return <Navigate to='/courses' />;
};

export default PrivateRoute;
