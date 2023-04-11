/** @format */
import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';

/** @format */

export const SendMessage = () => {
	const [message, setMessage] = useState('');
	const { socket } = useContext(SocketContext);
	const { auth } = useContext(AuthContext);
	const { state } = useContext(ChatContext);

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setMessage(target.value);
	};

	const onSubmit = (ev: FormEvent) => {
		ev.preventDefault();
		if (message.length === 0) return null;

		socket.emit('personal-message', {
			from: auth?.uid,
			to: state.activeChat,
			message,
		});

		setMessage('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='type_msg row'>
				<div className='input_msg_write col-sm-9'>
					<input
						className='write_msg'
						onChange={onChange}
						placeholder='Mensaje...'
						type='text'
						value={message}
					/>
				</div>
				<div className='col-sm-3 text-center'>
					<button
						className='msg_send_btn mt-3'
						type='submit'
					>
						enviar
					</button>
				</div>
			</div>
		</form>
	);
};
