import { useSelector } from 'react-redux';
import { Header } from '../Header';
import { ToDoList } from '../ToDoList';

import './styles.css';
import { Modal } from '../Modal';

export const ToDoApp = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<div>
			<Header />
			<Modal />
			<div className="w-1/2 my-0 mx-auto">
				<ToDoList todos={todos} />
			</div>
		</div>
	);
};
