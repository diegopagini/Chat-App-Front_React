/** @format */
import { Navigate } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';

interface Props {
	isAuthenticated: boolean | undefined;
}

export const PrivateRoute = ({ isAuthenticated }: Props) => {
	return isAuthenticated ? <ChatPage /> : <Navigate to='/auth/login' />;
};
