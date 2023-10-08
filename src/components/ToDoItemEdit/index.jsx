import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../actions/toDoActions';
import { Select } from '../Select';
import './styles.css';

export const ToDoEditItem = ({ todo, onAfterSubmit, onCloseModal }) => {
	const [editedTodo, setEditedTodo] = useState({
		title: todo.title,
		description: todo.description,
		dueDate: todo.dueDate,
		priority: todo.priority,
	});

	const dispatch = useDispatch();

	// console.log(todo);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedTodo({
			...editedTodo,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('todo id:', todo.id, 'editTodo:', editedTodo);
		dispatch(updateTodo(todo.id, editedTodo));
		onAfterSubmit();
	};

	return (
		<section>
			<div className="flex justify-center font-bold">
				<h1 className="text-2xl">Edição de tarefa</h1>
			</div>
			<form
				className="grid grid-cols-1 gap-x-8 gap-y-6"
				onSubmit={handleSubmit}
			>
				<div>
					<label>
						Titulo:
						<input
							name="title"
							value={editedTodo.title}
							onChange={handleInputChange}
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
							name="description"
							value={editedTodo.description}
							onChange={handleInputChange}
						></textarea>
					</label>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div>
						<input
							type="date"
							name="dueDate"
							value={editedTodo.dueDate}
							onChange={handleInputChange}
						/>
					</div>
					<Select
						name="priority"
						label="Prioridade"
						options={['Baixa', 'Média', 'Alta']}
						value={todo.priority}
						onChange={(data) =>
							handleInputChange({
								target: { value: data, name: 'priority' },
							})
						}
					/>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<button type="submit" className="button-save">
						Salvar
					</button>
					<button
						type="button"
						className="button-canceled"
						onClick={onCloseModal}
					>
						Cancelar
					</button>
				</div>
			</form>
		</section>
	);
};
