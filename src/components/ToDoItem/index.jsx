import { Calendar } from '../../../assets/icons/calendar';
import { SignalBarsHight } from '../../../assets/icons/signalBarsHight';
import { SignalBarsMiddle } from '../../../assets/icons/signalBarsMiddle';
import { SignalBarsLow } from '../../../assets/icons/signalBarsLow';
import { useState } from 'react';
import { ModalEdit } from '../Modals/ModalEdit';
import { ModalDelete } from '../Modals/ModalDelete';
import { Select } from '../Select';
import './styles.css';

export const ToDoItem = ({ todo }) => {
	const [status, setStatus] = useState('Aguardando');

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
		<div className="todo-item">
			<div className="flex justify-between">
				{todo && <h1 className="title-data pt-0 pb-2 text-xl">{todo.title}</h1>}
				<div className="flex items-center justify-end">
					<div className="flex justify-between">
						<ModalEdit todo={todo} className="mr-2 flex" />
						<ModalDelete todo={todo} />
					</div>
				</div>
			</div>
			<div className="description-content">
				<p className="break-words">{todo.description}</p>
			</div>

			<div className="container-information flex justify-between">
				<Select
					label="Prioridade"
					value={status}
					onChange={setStatus}
					options={['Aguardando', 'Em andamento', 'Concluido']}
				/>
				<div className="date-data">
					<Calendar />
					<span>{todo.dueDate}</span>
					<span>{levelIcon(todo.priority)}</span>
				</div>
			</div>
		</div>
	);
};
