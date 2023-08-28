import Select from 'react-select';
import './styles.css';
import { useState } from 'react';

export const ToDoForm = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ value: 'baixo', label: 'Baixo' },
		{ value: 'medio', label: 'Médio' },
		{ value: 'alto', label: 'Alto' },
	];

	const [dueDate, setDueDate] = useState('');

	return (
		<section>
			<div className="flex justify-center font-bold">
				<h1>Adicionar nova tarefa</h1>
			</div>
			<form className="grid grid-cols-1 gap-x-8 gap-y-6">
				<div>
					<label>Nome:</label>
					<input className="form-name" type="text" />
				</div>
				<div>
					<label>Descrição:</label>
					<textarea style={{ width: '100%' }}></textarea>
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
							defaultValue={selectedOption}
							onChange={setSelectedOption}
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
