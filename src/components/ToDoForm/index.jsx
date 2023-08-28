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
			<form className="grid grid-cols-1 gap-x-8 gap-y-6">
				<div>
					<label>Nome:</label>
					<input className="form-name" type="text" />
				</div>
				<div>
					<label>Descrição:</label>
					<textarea style={{ width: '100%' }}></textarea>
				</div>
				<div>
					<label>Data</label>
					<input
						type="date"
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
					/>
				</div>
				<Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					placeholder="Nivel de prioridade"
				/>
				<button type="submit">Adicionar nova tarefa</button>
			</form>
		</section>
	);
};
