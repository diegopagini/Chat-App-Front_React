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

		default:
			return state;
	}
};
