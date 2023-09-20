import Select from 'react-select';
import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/toDoActions';

export const ToDoForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [priority, setPriority] = useState(null);
	const dispatch = useDispatch();

	const options = [
		{ value: 'baixo', label: 'Baixo' },
		{ value: 'medio', label: 'Médio' },
		{ value: 'alto', label: 'Alto' },
	];

	const handleSubmit = (e) => {
		console.log(title, description, dueDate, priority);
		dispatch(addTodo(title, description, dueDate, priority));
		e.preventDefault();
	};

	return (
		<section>
			<div className="flex justify-center font-bold">
				<h1>Adicionar nova tarefa</h1>
			</div>
			<form
				className="grid grid-cols-1 gap-x-8 gap-y-6"
				onSubmit={handleSubmit}
			>
				<div>
					<label>
						Titulo:
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type="text"
						/>
					</label>
				</div>
				<div>
					<label>
						Descrição:
						<textarea
							className="description"
							style={{ width: '100%' }}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</label>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div>
						<input
							type="date"
							value={dueDate}
							onChange={(e) => setDueDate(e.target.value)}
						/>
					</div>
					<div>
						<Select
							className="select"
							defaultValue={priority}
							onChange={setPriority}
							options={options}
							placeholder="Nivel de prioridade"
						/>
					</div>
				</div>
				<button type="submit">Add nova tarefa.</button>
			</form>
		</section>
	);
};
