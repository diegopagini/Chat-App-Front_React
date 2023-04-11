/** @format */
import moment from 'moment';

export const getHourAndMonth = (date: Date) => {
	const today = moment(date);
	return today.format('HH:mm a | MMMM Do');
};
