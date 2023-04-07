/** @format */
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const Router = () => {
	const { auth, checkToken } = useContext(AuthContext);

	useEffect(() => {
		checkToken!();
	}, [checkToken]);

	if (auth?.checking) return <span style={{ textAlign: 'center' }}>Loading...</span>;

	return (
		<Routes>
			<Route
				path='/auth/*'
				element={<PublicRoute isAuthenticated={auth!.logged} />}
			/>
			<Route
				path='/'
				element={<PrivateRoute isAuthenticated={auth!.logged} />}
			/>
			<Route
				path='*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
};
