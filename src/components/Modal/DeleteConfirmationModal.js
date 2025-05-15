import React from "react";
import "./styles.css";
import Button from "../Button";
import { Trash, X } from "lucide-react";

const DeleteConfirmationModal = ({ userName, onConfirm, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza que deseja excluir o usuário {userName}?</p>
        <p>Esta ação não pode ser desfeita.</p>
        <div className="modal-buttons">
          <Button size="small" variant="cancel" onClick={onConfirm} icon={<Trash size={14} />}>
            Confirmar
          </Button>
          <Button
            size="small"
            onClick={onClose}
            icon={<X size={14} />}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
