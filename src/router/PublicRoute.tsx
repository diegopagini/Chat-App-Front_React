/** @format */
import { Navigate } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';

interface Props {
	isAuthenticated?: boolean;
}

export const PublicRoute = ({ isAuthenticated }: Props) => {
	return !isAuthenticated ? <AuthRouter /> : <Navigate to='/' />;
};
