/** @format */
import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (serverPath: string) => {
	const [socket, setSocket] = useState(null as any);
	const [online, setOnline] = useState(false);

	/** useCallback so that when it is part of the dependencies of the useEffect it is not called again */
	const connectSocket = useCallback(() => {
		const tempSocket = io(serverPath, {
			autoConnect: true,
			forceNew: true,
			transports: ['websocket'],
		});
		setSocket(tempSocket);
	}, [serverPath]);

	/** useCallback so that when it is part of the dependencies of the useEffect it is not called again */
	const disconnectSocket = useCallback(() => {
		socket?.disconnect();
	}, [socket]);

	useEffect(() => {
		setOnline(socket?.connected);
	}, [socket]);

	useEffect(() => {
		socket?.on('connect', () => setOnline(true));
	}, [socket]);

	useEffect(() => {
		socket?.on('disconnect', () => setOnline(false));
	}, [socket]);

	return {
		connectSocket,
		disconnectSocket,
		online,
		socket,
	};
};
