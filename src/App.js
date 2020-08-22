import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import './assets/styles/global.css'

import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
