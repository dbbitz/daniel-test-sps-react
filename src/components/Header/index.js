import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./styles.css";
import { LogOut } from "lucide-react";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar dados do usuário do localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    // Redirecionar para a página de login
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={handleLogout} variant="cancel" size="small" icon={<LogOut size={14} />} className="logout-button">
        Sair
      </Button>
    </header>
  );
};

export default Header; 