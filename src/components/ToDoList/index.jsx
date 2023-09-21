import { ToDoItem } from '../ToDoItem';
import './styles.css';

export const ToDoList = ({ todos }) => {
	return (
		<section>
			<div className="todo-list">
				{todos.map((todo) => (
					<ToDoItem key={todo.id} todo={todo} />
				))}
			</div>
		</section>
	);
};
