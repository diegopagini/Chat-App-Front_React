/** @format */
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

/** @format */

export const Searchbox = () => {
	const { auth, logout } = useContext(AuthContext);

	return (
		<div className='headind_srch'>
			<div className='recent_heading mt-2'>
				<h4>{auth?.name}</h4>
			</div>
			<div className='srch_bar'>
				<div className='stylish-input-group'>
					<button
						className='btn text-danger'
						type='button'
						onClick={logout}
					>
						Salir
					</button>
				</div>
			</div>
		</div>
	);
};
