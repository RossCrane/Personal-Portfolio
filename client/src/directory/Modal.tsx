import '../css/Modal.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<span className="close-button" onClick={onClose}>
					&times;
				</span>
				{children}
			</div>
		</div>
	);
};

export default Modal;
