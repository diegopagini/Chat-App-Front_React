/** @format */
import { InitialState } from './ChatContext';

interface Action {
	payload: any;
	type: string;
}

export const chatReducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};
