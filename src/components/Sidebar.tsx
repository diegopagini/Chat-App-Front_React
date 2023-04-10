/** @format */
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { User } from '../interfaces/user.interface';
import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {
	const { state } = useContext(ChatContext);
	const { auth } = useContext(AuthContext);

	return (
		<div className='inbox_chat'>
			{state.users
				.filter((user: User) => user.uid !== auth?.uid)
				.map((user: User) => (
					<SidebarChatItem
						key={user.uid}
						user={user}
					/>
				))}

			<div className='extra_space'></div>
		</div>
	);
};
