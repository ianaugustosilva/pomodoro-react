import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<>
						<Backdrop />
						<ModalContainer isOpen={isOpen} onClose={onClose} />
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
