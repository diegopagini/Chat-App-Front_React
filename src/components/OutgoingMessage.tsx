/** @format */
interface Props {
	message: string;
	createdAt: string;
}

export const OutgoingMessage = ({ message, createdAt }: Props) => {
	return (
		<div className='outgoing_msg'>
			<div className='sent_msg'>
				<p>{message}</p>
				<span className='time_date'>{createdAt}</span>
			</div>
		</div>
	);
};
