/** @format */
import { useContext } from 'react';

import { ChatContext } from '../context/chat/ChatContext';
import { User } from '../interfaces/user.interface';
import { types } from '../types/types';

interface Props {
	user: User;
}

export const SidebarChatItem = ({ user }: Props) => {
	const { dispatch, state } = useContext(ChatContext);
	const onClick = () => {
		dispatch({
			type: types.activeChat,
			payload: user.uid,
		});
	};

	return (
		<div
			onClick={onClick}
			className={`chat_list ${user.uid === state.activeChat && 'active_chat'}`}
		>
			<div className='chat_people'>
				<div className='chat_img'>
					<img
						style={{
							borderRadius: '100%',
						}}
						src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
						alt='sunil'
					/>
				</div>
				<div className='chat_ib'>
					<h5>{user.name}</h5>
					{user.online ? (
						<span className='text-success'>Online</span>
					) : (
						<span className='text-danger'>Offline</span>
					)}
				</div>
			</div>
		</div>
	);
};
