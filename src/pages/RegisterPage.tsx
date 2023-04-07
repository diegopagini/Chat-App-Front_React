/** @format */
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

const RegisterPage = () => {
	const { register } = useContext(AuthContext);

	const [form, setForm] = useState({
		email: '',
		name: '',
		password: '',
	});

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const onSubmit = async (ev: FormEvent) => {
		ev.preventDefault();
		const { email, password, name } = form;

		const ok = await register!(name, email, password);
		if (!ok) Swal.fire('Error', 'Verifique el usuario y/o contraseña', 'error');
	};

	const formValid = () =>
		form.email.length > 0 && form.password.length > 0 && form.name.length ? true : false;

	return (
		<form
			className='login100-form validate-form flex-sb flex-w'
			onSubmit={onSubmit}
		>
			<span className='login100-form-title mb-3'>Chat - Registro</span>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					name='name'
					onChange={onChange}
					placeholder='Nombre'
					type='text'
					value={form.name}
				/>
				<span className='focus-input100'></span>
			</div>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					name='email'
					onChange={onChange}
					placeholder='Email'
					type='email'
					value={form.email}
				/>
				<span className='focus-input100'></span>
			</div>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					name='password'
					onChange={onChange}
					placeholder='Password'
					type='password'
					value={form.password}
				/>
				<span className='focus-input100'></span>
			</div>

			<div className='row mb-3'>
				<div className='col text-right'>
					<Link
						to='/auth/login'
						className='txt1'
					>
						Ya tienes cuenta?
					</Link>
				</div>
			</div>

			<div className='container-login100-form-btn m-t-17'>
				<button
					className='login100-form-btn'
					disabled={!formValid()}
					type='submit'
				>
					Crear cuenta
				</button>
			</div>
		</form>
	);
};

export default RegisterPage;
