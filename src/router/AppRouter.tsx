/** @format */
import { Route, Routes } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const Router = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<ChatPage />}
			/>
			<Route
				path='/auth/*'
				element={<AuthRouter />}
			/>
			<Route
				path='*'
				element={<ChatPage />}
			/>
		</Routes>
	);
};
