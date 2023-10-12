import { useState } from 'react';
import './styles.css';
import { Cross } from '../../../assets/icons/cross';
import { Calendar } from '../../../assets/icons/calendar';
import { SignalBarsLow } from '../../../assets/icons/signalBarsLow';
import { SignalBarsMiddle } from '../../../assets/icons/signalBarsMiddle';
import { SignalBarsHight } from '../../../assets/icons/signalBarsHight';
import { formatDate } from '../../helpers';

export const ModalDescription = ({ todo }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		if (isOpen == true) {
			setIsOpen(false);
			() => openModal;
		} else {
			setIsOpen(true);
		}
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
		<div>
			<button
				className="button-description"
				title="Nova tarefa"
				onClick={openModal}
			>
				Descrição
			</button>

			{isOpen && (
				<div className="modal-description">
					<div className="flex justify-end">
						<button onClick={openModal}>
							<Cross />
						</button>
					</div>
					<div className="modal-content">
						<h1>{todo.title}</h1>

						<p>{todo.description}</p>
					</div>
					<div className="date-data">
						<Calendar />
						<span>{formatDate(todo.dueDate)}</span>
						<span title={'Prioridade: ' + todo.priority}>
							{levelIcon(todo.priority)}
							{todo.priority}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};