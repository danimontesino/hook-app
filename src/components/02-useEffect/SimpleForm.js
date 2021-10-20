import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
	});

	const { name, email } = form;

	useEffect(() => {
		// console.log('hey');
	}, []);

	useEffect(() => {
		// console.log('email State cambió');
	}, [email]);

	const handleInputChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				></input>
			</div>
			<div className="form-group">
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="Tu email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				></input>
			</div>
			{name === '123' && <Message />}
		</>
	);
};
