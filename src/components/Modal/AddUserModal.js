import React, { useState, useEffect, useCallback } from "react";
import useNotification from "../../hooks/useNotification";
import "./styles.css";
import Button from "../Button";
import { Save, X } from "lucide-react";

const AddUserModal = ({ onClose, onSave }) => {
  const { showSuccess, showError } = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.type) {
      newErrors.type = "Tipo é obrigatório";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Senha é obrigatória";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData, validateForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        onSave(formData);
        showSuccess("Usuário adicionado com sucesso!");
        onClose();
      } catch (error) {
        showError("Erro ao adicionar usuário. Tente novamente.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Adicionar Novo Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
            {errors.type && (
              <span className="error-message">{errors.type}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="modal-buttons">
            <Button
              type="submit"
              disabled={!isFormValid}
              icon={<Save size={14} />}
              size="small"
              variant="save"
            >
              Salvar
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="cancel"
              icon={<X size={14} />}
              size="small"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
