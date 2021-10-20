import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ handleAdd }) => {
	const [{ description }, handleInputChange, reset] = useForm({ description: '' });

	const handleSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		handleAdd(description);
		reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="form-control"
				name="description"
				placeholder="todo..."
				autoComplete="false"
				value={description}
				onChange={handleInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-1 btn-block w-100">
				Agregar
			</button>
		</form>
	);
};
