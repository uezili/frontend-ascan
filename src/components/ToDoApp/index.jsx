import { useSelector } from 'react-redux';
import { Header } from '../Header';
import { ToDoForm } from '../ToDoForm';
import { ToDoList } from '../ToDoList';

import './styles.css';

export const ToDoApp = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<div>
			<Header />
			<div className="grid grid-cols-2 w-full">
				<ToDoForm />
				<ToDoList todos={todos} />
			</div>
		</div>
	);
};
