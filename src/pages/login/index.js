import React, { useState } from 'react';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/images/logo.svg';
import logoNameImg from '../../assets/images/logo-name.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFails, setLoginFails] = useState(false);

  const { signIn } = useAuth();

  async function authenticate(e) {
    e.preventDefault();
    
    try {
      await signIn({
        email,
        password
      });
    }catch(err) {
      setLoginFails(true)
      console.log('Erro', err.message);
    }
    
  }

  return (
      <div className="login-container">
        <div className="login-box"> 
          <div className="logo-group">
            <img src={logoImg} alt="Logo"/>
            <img src={logoNameImg} alt="Logo name"/>
          </div>
          
          {loginFails && <h2 id="login-fail-warning">E-mail ou senha inválidos</h2>}
          
          <form onSubmit={authenticate} className="input-group">
            <Input 
              label="E-mail" 
              placeholder="E-mail" 
              type="text" 
              error={loginFails}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            
            <Input 
              label="Senha" 
              placeholder="Senha" 
              type="password" 
              error={loginFails}
              onChange={(e) => {setPassword(e.target.value)}}
            />

            
            <Button type="submit" label="Entrar"/>
          </form>
        </div>
      </div>
  );
}

export default Login;