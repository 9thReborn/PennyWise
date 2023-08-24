import { FC, ReactNode, MouseEvent } from "react";
import "./modal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? "flex" : "none",
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      style={modalStyles}
      onClick={handleModalClick}
    >
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
