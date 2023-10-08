import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/toDoActions';
import { Plus } from '../../../assets/icons/plus';
import { Select } from '../Select';

export const ToDoForm = ({ onAfterSubmit }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [priority, setPriority] = useState(null);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(title, description, dueDate, priority));
		setTitle('');
		setDescription('');
		setDueDate('');
		setPriority(null);
		onAfterSubmit();
	};

	return (
		<section>
			<div className="flex justify-center font-bold">
				<h1 className="text-2xl">Adicionar nova tarefa</h1>
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
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Descrição:
						<textarea
							className="description"
							required
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
							required
							value={dueDate}
							onChange={(e) => setDueDate(e.target.value)}
						/>
					</div>
					<Select
						label="Prioridade"
						value={priority}
						onChange={setPriority}
						options={['Baixa', 'Média', 'Alta']}
					/>
				</div>
				<div>
					<button className="button-submit" type="submit">
						Add nova tarefa <Plus />
					</button>
				</div>
			</form>
		</section>
	);
};
