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

		default:
			return state;
	}
};
