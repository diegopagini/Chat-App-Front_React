/** @format */
import { createContext, ReactNode, useCallback, useState } from 'react';

import { fetchWithoutToken } from '../helpers/fetch';

interface InitialState {
	auth?: InitialState | null;
	checking?: boolean;
	email?: string | null;
	logged?: boolean;
	name?: string | null;
	uid?: string | null;
	login?: (email: string, password: string) => Promise<boolean>;
	register?: (name: string, email: string, password: string) => Promise<boolean>;
	checkToken?: () => void;
	logout?: () => void;
}

interface Props {
	children: ReactNode;
}

const initialState: InitialState = {
	auth: null,
	checking: true,
	email: null,
	logged: false,
	name: null,
	uid: null,
};

export const AuthContext = createContext<InitialState>(initialState);

export const AuthProvider = ({ children }: Props) => {
	const [auth, setAuth] = useState(initialState);
	const login = async (email: string, password: string) => {
		const response = await fetchWithoutToken({
			endpoint: 'login',
			data: { email, password },
			method: 'POST',
		});

		if (response.token) {
			localStorage.setItem('token', response.token);
			const {
				user: { email, name, uid },
			} = response;
			setAuth({
				checking: false,
				email: email,
				logged: true,
				name: name,
				uid: uid,
			});
		}

		return response.token ? true : false;
	};

	const register = async (name: string, email: string, password: string) => {
		const response = await fetchWithoutToken({
			endpoint: 'login/new',
			data: { name, email, password },
			method: 'POST',
		});

		if (response.token) {
			localStorage.setItem('token', response.token);
			const {
				user: { email, name, uid },
			} = response;
			setAuth({
				checking: false,
				email: email,
				logged: true,
				name: name,
				uid: uid,
			});
		}

		return response.token ? true : false;
	};

	const checkToken = useCallback(() => {}, []);
	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{
				auth,
				login,
				register,
				checkToken,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
