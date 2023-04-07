/** @format */

export const SidebarChatItem = () => {
	return (
		<div className='chat_list active_chat'>
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
					<h5>Some random name</h5>
					<span className='text-success'>Online</span>
					<span className='text-danger'>Offline</span>
				</div>
			</div>
		</div>
	);
};
