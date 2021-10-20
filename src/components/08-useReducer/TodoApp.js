import React, { useEffect, useReducer } from 'react';
import './style.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleComplete = todoId => {
		const action = {
			type: 'complete',
			payload: todoId,
		};
		dispatch(action);
	};

	const handleDelete = todoId => {
		const action = {
			type: 'delete',
			payload: todoId,
		};
		dispatch(action);
	};

	const handleAdd = description => {
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
	};

	return (
		<div>
			<h1>
				TodoApp <small>({todos.length})</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />
				</div>
				<div className="col-5">
					<h4>Agregar todo</h4>
					<TodoForm handleAdd={handleAdd} />
				</div>
			</div>
		</div>
	);
};
