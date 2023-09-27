import { Calendar } from '../../../assets/icons/calendar';
import { SignalBarsHight } from '../../../assets/icons/signalBarsHight';
import { SignalBarsMiddle } from '../../../assets/icons/signalBarsMiddle';
import { SignalBarsLow } from '../../../assets/icons/signalBarsLow';
import './styles.css';
import Select from 'react-select';
import { useState } from 'react';

const statusItem = [
	{ value: 'aguardando', label: 'Aguardando' },
	{ value: 'em andamento', label: 'Em andamento' },
	{ value: 'concluido', label: 'Concluido' },
];

export const ToDoItem = ({ todo }) => {
	const [status, setStatus] = useState({
		value: 'aguardando',
		label: 'Aguardando',
	});

	function levelIcon(level) {
		if (level == 'Baixo') {
			return <SignalBarsLow />;
		} else if (level == 'Médio') {
			return <SignalBarsMiddle />;
		} else if (level == 'Alto') {
			return <SignalBarsHight />;
		}
	}

	return (
		<div className={'todo-item'} style={{ background: background }}>
			<div className="flex justify-between">
				{todo && <h1 className="pt-0 pb-2 text-xl">{todo.title}</h1>}
				<div className="flex items-center">
					<button className="edit-button mr-2 flex"></button>
					<button className="delete-button flex"></button>
				</div>
			</div>

			<div>
				<p className="break-words">{todo.description}</p>
			</div>
			<div className="flex justify-between">
				<Select
					className="select-date"
					defaultValue={status}
					onChange={setStatus}
					options={statusItem}
				/>
				<div className="date-data">
					<Calendar />
					<p>{todo.dueDate}</p>
					<span>{levelIcon(todo.priority.label)}</span>
				</div>
			</div>
		</div>
	);
};
