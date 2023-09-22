import { useState } from 'react';
import { ToDoForm } from '../ToDoForm';
import './styles.css';
import { Plus } from '../../../assets/icons/plus';

export const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [rotate, setRotate] = useState('');

	const openModal = () => {
		if (isOpen == true) {
			setIsOpen(false);
			setRotate('rotate-0');
			() => openModal;
		} else {
			setIsOpen(true);
			setRotate('rotate-45');
		}
	};
	console.log(isOpen);
	return (
		<div className="flex justify-center ">
			<button className="open-modal" onClick={openModal}>
				<Plus rotate={rotate} />
			</button>

			{isOpen && (
				<div className="modal">
					<div className="modal-content">
						<ToDoForm onAfterSubmit={() => setIsOpen(false)} />
					</div>
				</div>
			)}
		</div>
	);
};
