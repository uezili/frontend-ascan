import { useSelector } from 'react-redux';
import { ToDoItem } from '../ToDoItem';
import './styles.css';

export const ToDoList = ({ todos }) => {
	console.log('todoList: ', todos);
	const todoSort = useSelector((state) => state.todos);

	const sortTodos = [...todoSort].sort((a, b) => {
		if (a.status === 'Concluido' && b.status !== 'Concluido') return 1;
		if (a.status !== 'Concluido' && b.status === 'Concluido') return -1;
		if (
			(a.status === 'Em Andamento' && b.status !== 'Em andamento') ||
			(a.status === 'Aguardando' && b.status !== 'Aguardando')
		)
			return 0;
	});

	return (
		<div className="todo-list">
			{sortTodos.map((todo) => (
				<ToDoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};
