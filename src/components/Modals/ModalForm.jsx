import { useState } from 'react';
import { ToDoForm } from '../ToDoForm';
import './styles.css';
import { Plus } from '../../../assets/icons/plus';
import { Cross } from '../../../assets/icons/cross';

export const ModalForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		if (isOpen == true) {
			setIsOpen(false);
			() => openModal;
		} else {
			setIsOpen(true);
		}
	};

	return (
		<div className="flex justify-center">
			<button className="open-modal" title="Nova tarefa" onClick={openModal}>
				<Plus />
			</button>

			{isOpen && (
				<div className="modal-form">
					<div className="flex justify-end">
						<button onClick={openModal}>
							<Cross />
						</button>
					</div>

					<div className="modal-content">
						<ToDoForm onAfterSubmit={() => setIsOpen(false)} />
					</div>
				</div>
			)}
		</div>
	);
};
