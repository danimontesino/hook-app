import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleComplete, handleDelete, dispatch }) => {
	return (
		<ul className="list-group-flush">
			{todos.map((todo, index) => (
				<TodoListItem
					key={todo.id}
					index={index}
					todo={todo}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};
