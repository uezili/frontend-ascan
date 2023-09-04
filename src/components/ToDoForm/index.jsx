import Select from 'react-select';
import './styles.css';
import { useState } from 'react';

export const ToDoForm = () => {
	const [priority, setPriority] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');

	const options = [
		{ value: 'baixo', label: 'Baixo' },
		{ value: 'medio', label: 'Médio' },
		{ value: 'alto', label: 'Alto' },
	];

	const handleSubmit = () => {
		const addNewTask = {
			id: Date.now(),
			name,
			description,
			dueDate,
			priority,
		};

		console.log(addNewTask);
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
						Nome:
						<input
							className="form-name"
							value={name}
							onChange={(e) => setName(e.target.value)}
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
