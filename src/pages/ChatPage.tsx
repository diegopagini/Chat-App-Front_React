/** @format */
import '../css/chat.css';

import { ChatSelected } from '../components/ChatSelected';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';

export const ChatPage = () => {
	return (
		<div className='messaging'>
			<div className='inbox_msg'>
				<InboxPeople />

				{true ? <Messages /> : <ChatSelected />}
			</div>
		</div>
	);
};
