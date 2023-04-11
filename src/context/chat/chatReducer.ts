/** @format */
import { types } from '../../types/types';
import { InitialState } from './ChatContext';

interface Action {
	payload: any;
	type: string;
}

export const chatReducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case types.loadedUsers:
			return {
				...state,
				users: [...action.payload],
			};

		case types.activeChat:
			if (state.activeChat === action.payload) return state;
			return {
				...state,
				activeChat: action.payload,
				messages: [],
			};

		case types.newMessage:
			if (state.activeChat === action.payload.from || state.activeChat === action.payload.to)
				return {
					...state,
					messages: [...state.messages, action.payload],
				};
			else return state;

		default:
			return state;
	}
};
