import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import logoNameImg from '../../assets/images/logo-name.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  return (
      <div className="login-container">
        <div className="login-box"> 
          <div className="logo-group">
            <img src={logoImg} alt="Logo"/>
            <img src={logoNameImg} alt="Logo name"/>
          </div>
          <form className="input-group">
            <Input label="E-mail" placeholder="E-mail" type="text" />
            <Input label="Senha" placeholder="Senha" type="password" />
          </form>
          <Button label="Entrar" />
        </div>
      </div>
  );
}

export default Login;