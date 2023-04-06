/** @format */
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const [form, setForm] = useState({
		email: 'test2@test.com',
		password: '123456',
		remembeme: true,
	});

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const toggleCheck = () => {
		setForm({
			...form,
			remembeme: !form.remembeme,
		});
	};

	const onSubmit = (ev: FormEvent) => {
		ev.preventDefault();
		console.log(form);
	};

	return (
		<form
			className='login100-form validate-form flex-sb flex-w'
			onSubmit={onSubmit}
		>
			<span className='login100-form-title mb-3'>Chat - Login</span>

			<div className='wrap-input100 validate-input mb-3'>
				<input
					className='input100'
					name='email'
					placeholder='Email'
					type='email'
					value={form.email}
					onChange={onChange}
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
				<div
					className='col'
					onClick={() => toggleCheck()}
				>
					<input
						className='input-checkbox100'
						id='ckb1'
						type='checkbox'
						name='rememberme'
						checked={form.remembeme}
						readOnly
					/>
					<label className='label-checkbox100'>Recordarme</label>
				</div>

				<div className='col text-right'>
					<Link
						to='/auth/register'
						className='txt1'
					>
						Nueva cuenta?
					</Link>
				</div>
			</div>

			<div className='container-login100-form-btn m-t-17'>
				<button className='login100-form-btn'>Ingresar</button>
			</div>
		</form>
	);
};

export default LoginPage;
