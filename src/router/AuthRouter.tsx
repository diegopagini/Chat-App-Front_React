/** @format */
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const AuthRouter = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/register'
					element={<RegisterPage />}
				/>
				<Route
					path='*'
					element={<LoginPage />}
				/>
			</Routes>
		</div>
	);
};
