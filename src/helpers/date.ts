/** @format */
import 'moment/locale/es';

import moment from 'moment';

moment.locale('es');

export const getHourAndMonth = (date: Date) => {
	const today = moment(date);
	return today.format('HH:mm a | MMMM Do');
};
