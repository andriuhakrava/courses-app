import { ROLE } from './roles';

export const getAuthenticatedToken = (state) => state.user.token;

export const getAuthenticatedUserName = (state) => state.user.name;

export const getAuthenticatedStatus = (state) => state.user.isAuth;

export const getRoleAdmin = (state) =>
	state.user.role === ROLE.ADMIN ? true : false;
