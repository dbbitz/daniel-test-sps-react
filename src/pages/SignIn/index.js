import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoginService from "../../services/login-service";
import "./styles.css";
import useNotification from "../../hooks/useNotification";
function SignIn() {
  const { showSuccess, showError } = useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginService = new LoginService();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginService.login(email, password);
      navigate("/users");
      showSuccess("Login realizado com sucesso!");
    } catch (error) {
      showError(error.message || "Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Input
          type="email"
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default SignIn;
