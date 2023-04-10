/** @format */
import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useSocket } from '../hooks/useSocket';
import { User } from '../interfaces/user.interface';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { ChatContext } from './chat/ChatContext';

export const SocketContext = createContext({});

interface Props {
	children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
	const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
	const { auth } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

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

	/** Listen for changes in connected users */
	useEffect(() => {
		socket?.on('users-list', (users: User[]) => {
			dispatch({
				type: types.loadedUsers,
				payload: users,
			});
		});
	}, [socket, dispatch]);

	return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
