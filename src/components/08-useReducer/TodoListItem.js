import React from 'react';

export const TodoListItem = ({ index, todo, handleComplete, handleDelete }) => {
	const { id, done, desc } = todo;

	return (
		<li key={id} className="list-group-item d-flex align-items-center justify-content-between">
			<p
				className={`text-center m-0 ${done && 'complete'}`}
				role="button"
				onClick={() => handleComplete(id)}
			>
				{index + 1}. {desc}
			</p>
			<button className="btn btn-danger" onClick={() => handleDelete(id)}>
				Borrar
			</button>
		</li>
	);
};
