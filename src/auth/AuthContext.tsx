/** @format */
import { createContext, ReactNode, useCallback, useState } from 'react';

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
	const login = (email: string, password: string) => {};
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
