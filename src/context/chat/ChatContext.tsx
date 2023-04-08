/** @format */
import { createContext, ReactNode, useReducer } from 'react';

import { chatReducer } from './chatReducer';

export const ChatContext = createContext({});

interface Props {
	children: ReactNode;
}

export interface InitialState {
	activeChat: null;
	messages: string[];
	uid: string;
	users: any[];
}

const initialState: InitialState = {
	activeChat: null,
	messages: [],
	uid: '',
	users: [],
};

export const ChatProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(chatReducer, initialState);

	return (
		<ChatContext.Provider
			value={{
				dispatch,
				state,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
