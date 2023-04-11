/** @format */
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { Message } from '../interfaces/message.interface';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
	const { state } = useContext(ChatContext);
	const { auth } = useContext(AuthContext);

	return (
		<div className='mesgs'>
			<div className='msg_history'>
				{state.messages.map((msg: Message) =>
					msg.to === auth?.uid ? (
						<IncomingMessage
							key={msg._id}
							message={msg.message}
							createdAt={msg.createdAt}
						/>
					) : (
						<OutgoingMessage
							key={msg._id}
							message={msg.message}
							createdAt={msg.createdAt}
						/>
					)
				)}
			</div>

			<SendMessage />
		</div>
	);
};
