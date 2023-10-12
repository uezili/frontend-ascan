import { useSelector } from 'react-redux';
import { ToDoItem } from '../ToDoItem';
import './styles.css';
import { Select } from '../Select';
import { useState } from 'react';
import { FilterIcon } from '../IconsComponents/filter';

export const ToDoList = () => {
	const todo = useSelector((state) => state.todos);

	const [selectedPriority, setSelectedPriority] = useState('Todas');
	const [selectedStatus, setSelectedStatus] = useState('Todas');

	const filteredTodos = todo.filter((todo) => {
		if (selectedPriority !== 'Todas' && todo.priority !== selectedPriority) {
			return false;
		}
		if (selectedStatus !== 'Todas' && todo.status !== selectedStatus) {
			return false;
		}
		return true;
	});

	return (
		<div className="todo-list">
			<div className="select-filters">
				<label>
					Status:
					<Select
						label="Status"
						options={['Todas', 'Aguardando', 'Em andamento', 'Concluido']}
						value={selectedStatus}
						onChange={setSelectedStatus}
					/>
				</label>
				<label>
					Prioridade:
					<Select
						label="Prioridade"
						options={['Todas', 'Baixa', 'Média', 'Alta']}
						value={selectedPriority}
						onChange={setSelectedPriority}
					/>
				</label>
				<FilterIcon className="mt-8" />
			</div>
			<div className="grid grid-cols-3 gap-x-3">
				{filteredTodos.map((todo) => (
					<ToDoItem key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
};
