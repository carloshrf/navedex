import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import logoNameImg from '../../assets/images/logo-name.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="logo-group">
        <img src={logoImg} alt="Logo" className="logo" />
        <img src={logoNameImg} alt="Logo Name" className="logo-name" />
      </div>
      <a href="/">Sair</a>
    </header>
  );
}

 export default Header;