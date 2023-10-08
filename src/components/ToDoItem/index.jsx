import { Calendar } from '../../../assets/icons/calendar';
import { SignalBarsHight } from '../../../assets/icons/signalBarsHight';
import { SignalBarsMiddle } from '../../../assets/icons/signalBarsMiddle';
import { SignalBarsLow } from '../../../assets/icons/signalBarsLow';
import { ModalEdit } from '../Modals/ModalEdit';
import { ModalDelete } from '../Modals/ModalDelete';
import { Select } from '../Select';
import './styles.css';
import { useDispatch } from 'react-redux';
import { completeTodo, updateTodo } from '../../actions/toDoActions';

export const ToDoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleStatusChange = (currentStatus) => {
		const newStatus = currentStatus;
		dispatch(updateTodo(todo.id, { status: newStatus }));
		dispatch(completeTodo(todo.id));
	};

	function levelIcon(level) {
		if (level == 'Baixa') {
			return <SignalBarsLow />;
		} else if (level == 'Média') {
			return <SignalBarsMiddle />;
		} else if (level == 'Alta') {
			return <SignalBarsHight />;
		}
	}

	return (
		<div className={(!todo.completed ? '' : 'completed', 'todo-item')}>
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
					label="Status"
					value={todo.status}
					onChange={handleStatusChange}
					options={['Aguardando', 'Em andamento', 'Concluido']}
				/>
				<div className="date-data">
					<Calendar />
					<span>{todo.dueDate}</span>
					<span title={'Prioridade: ' + todo.priority}>
						{levelIcon(todo.priority)}
					</span>
				</div>
			</div>
		</div>
	);
};
