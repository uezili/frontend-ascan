import Select from 'react-select';
import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../actions/toDoActions';

export const ToDoEditItem = ({ todo, onEditComplete, onAfterSubmit }) => {
	const [editedTodo, setEditedTodo] = useState({
		title: todo.title,
		description: todo.description,
		dueDate: todo.dueDate,
		priority: todo.priority,
	});

	const dispatch = useDispatch();

	console.log(todo);

	const handleInputChange = (e) => {
		console.log(e);
		const { name, value } = e.target;
		setEditedTodo({
			...editedTodo,
			[name]: value,
			status: setPriority(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateTodo(todo.id, editedTodo));
		onEditComplete();
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
					<div>
						<Select
							className="select"
							name="status"
							value={todo.priority}
							onChange={handleInputChange}
							options={[
								{ value: 'baixo', label: 'Baixo' },
								{ value: 'medio', label: 'Médio' },
								{ value: 'alto', label: 'Alto' },
							]}
							placeholder="Nivel"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<button type="submit" className="button-save">
						Save
					</button>
					<button
						type="button"
						onClick={onEditComplete}
						className="button-canceled"
					>
						Cancel
					</button>
				</div>
			</form>
		</section>
	);
};
