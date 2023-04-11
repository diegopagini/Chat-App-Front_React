/** @format */
import { getHourAndMonth } from '../helpers/date';

/** @format */
interface Props {
	message: string;
	createdAt: Date;
}

export const OutgoingMessage = ({ message, createdAt }: Props) => {
	return (
		<div className='outgoing_msg'>
			<div className='sent_msg'>
				<p>{message}</p>
				<span className='time_date'>{getHourAndMonth(createdAt)}</span>
			</div>
		</div>
	);
};
