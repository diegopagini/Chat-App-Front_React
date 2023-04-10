/** @format */
import '../css/chat.css';

import { useContext } from 'react';

import { ChatSelected } from '../components/ChatSelected';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';

export const ChatPage = () => {
	const { state } = useContext(ChatContext);

	return (
		<div className='messaging'>
			<div className='inbox_msg'>
				<InboxPeople />

				{state.activeChat ? <Messages /> : <ChatSelected />}
			</div>
		</div>
	);
};
