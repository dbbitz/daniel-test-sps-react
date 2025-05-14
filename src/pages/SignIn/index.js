import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
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

        <Button type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default SignIn; 