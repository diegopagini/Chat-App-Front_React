/** @format */
import { getHourAndMonth } from '../helpers/date';

/** @format */
interface Props {
	message: string;
	createdAt: Date;
}

export const IncomingMessage = ({ message, createdAt }: Props) => {
	return (
		<div className='incoming_msg'>
			<div className='incoming_msg_img'>
				<img
					src='https://ptetutorials.com/images/user-profile.png'
					alt='sunil'
				/>
			</div>
			<div className='received_msg'>
				<div className='received_withd_msg'>
					<p>{message}</p>
					<span className='time_date'>{getHourAndMonth(createdAt)}</span>
				</div>
			</div>
		</div>
	);
};
