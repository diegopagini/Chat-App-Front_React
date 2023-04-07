/** @format */
import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const Router = () => {
	const { auth, checkToken } = useContext(AuthContext);

	useEffect(() => {
		checkToken!();
	}, [checkToken]);

	if (auth?.checking) return <h1>Espere por favor</h1>;

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
