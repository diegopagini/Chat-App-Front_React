/** @format */
import { createContext, ReactNode, useCallback, useState } from 'react';

import { fetchWithoutToken } from '../helpers/fetch';

interface InitialState {
	checking?: boolean;
	email?: string | null;
	logged?: boolean;
	name?: string | null;
	uid?: string | null;
	login?: (email: string, password: string) => void;
	register?: (name: string, email: string, password: string) => void;
	checkToken?: () => void;
	logout?: () => void;
}

interface Props {
	children: ReactNode;
}

const initialState: InitialState = {
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

		console.log(response);
	};
	const register = (name: string, email: string, password: string) => {};
	const checkToken = useCallback(() => {}, []);
	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{
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
