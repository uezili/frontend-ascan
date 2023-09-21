import { Calendar } from '../../../assets/icons/calendar';
import { SignalBarsHight } from '../../../assets/icons/signalBarsHight';
import { SignalBarsMiddle } from '../../../assets/icons/signalBarsMiddle';
import { SignalBarsLow } from '../../../assets/icons/signalBarsLow';
import './styles.css';

function levelIcon(level) {
	if (level == 'Baixo') {
		return <SignalBarsLow />;
	} else if (level == 'Médio') {
		return <SignalBarsMiddle />;
	} else if (level == 'Alto') {
		return <SignalBarsHight />;
	}
}

export const ToDoItem = ({ todo }) => {
	return (
		<div className="todo-item">
			<h1>{todo.title}</h1>
			<div>
				<p>{todo.description}</p>
				<span>{levelIcon(todo.priority.label)}</span>
				<div className="date-data">
					<Calendar />
					<p>Due: {todo.dueDate}</p>
				</div>
			</div>
			<button>Delete</button>
		</div>
	);
};
