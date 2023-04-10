/** @format */
import { createContext, ReactNode, useReducer } from 'react';

import { User } from '../../interfaces/user.interface';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext<{
	state: any;
	dispatch: any;
}>({
	state: null,
	dispatch: null,
});

interface Props {
	children: ReactNode;
}

export interface InitialState {
	activeChat: null;
	messages: string[];
	uid: string;
	users: User[];
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
