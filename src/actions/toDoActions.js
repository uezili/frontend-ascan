export const addTodo = (title, description, dueDate, priority) => ({
	type: 'ADD_TODO',
	payload: {
		id: Date.now(),
		title,
		description,
		dueDate,
		priority,
		completed: false,
	},
});

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	payload: {
		id,
	},
});

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	payload: {
		id,
	},
});

export const updateTodo = (id, updatedTodo) => ({
	type: 'UPDATE_TODO',
	payload: {
		id,
		updatedTodo,
	},
});
