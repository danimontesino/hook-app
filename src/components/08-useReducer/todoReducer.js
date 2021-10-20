export const todoReducer = (state = [], action) => {
	/* switch (action.type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return state.filter(todo => todo.id !== action.payload);
		case 'complete':
			return state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
		default:
			return state;
	} */

	const actionType = {
		add: [...state, action.payload],
		delete: state.filter(todo => todo.id !== action.payload),
		complete: state.map(todo =>
			todo.id === action.payload ? { ...todo, done: !todo.done } : todo
		),
	};

	return actionType[action.type] || state;
};
