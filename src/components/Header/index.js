import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoNameImg from '../../assets/images/logo-name.svg';

import { useAuth } from '../../hooks/AuthContext';

import './styles.css';

function Header() {
  const { signOut } = useAuth();

  return (
    <header>
      <div className="logo-group">
        <img src={logoImg} alt="Logo" className="logo" />
        <img src={logoNameImg} alt="Logo Name" className="logo-name" />
      </div>
      <Link to="/login" onClick={signOut}>Sair</Link>
    </header>
  );
}

 export default Header;