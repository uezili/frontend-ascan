import { useState } from 'react';
import { ToDoEditItem } from '../ToDoItemEdit';

import './styles.css';

export const ModalEdit = ({ todo, onEditComplete }) => {
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
			<button className="bg-red-700" onClick={openModal}>
				test
			</button>

			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<ToDoEditItem
							todo={todo}
							onEditComplete={onEditComplete}
							onAfterSubmit={() => setIsOpen(false)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
