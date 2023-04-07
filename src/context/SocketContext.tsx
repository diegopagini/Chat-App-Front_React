/** @format */
import { createContext, ReactNode } from 'react';

import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext({});

interface Props {
	children: ReactNode;
}

export const SocketProvider = ({ children }: Props) => {
	const { socket, online } = useSocket('http://localhost:8080');

	return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
