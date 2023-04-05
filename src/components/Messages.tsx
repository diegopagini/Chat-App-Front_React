/** @format */
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
	const msg = [1, 2, 3, 4, 5];

	return (
		<div className='mesgs'>
			<div className='msg_history'>
				{msg.map((el) => (el % 2 ? <IncomingMessage key={el} /> : <OutgoingMessage key={el} />))}
			</div>

			<SendMessage />
		</div>
	);
};
