/** @format */
import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './AuthContext';

export const SocketContext = createContext({});

interface Props {
	children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
	const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
	const { auth } = useContext(AuthContext);

	useEffect(() => {
		if (auth?.logged) connectSocket();
	}, [
		auth,
		connectSocket,
	]); /** When useCallback is used even though it is in the dependency list it is not called again When useCollback is used even though it is in the dependency list it is not called again */

	useEffect(() => {
		if (!auth?.logged) disconnectSocket();
	}, [
		auth,
		disconnectSocket,
	]); /** When useCallback is used even though it is in the dependency list it is not called again When useCollback is used even though it is in the dependency list it is not called again */

	return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
