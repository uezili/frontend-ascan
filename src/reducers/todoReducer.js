const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'COMPLETE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? { ...todo, completed: true } : todo
				),
			};

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};

		default:
			return state;
	}
};

export default todoReducer;
