import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Naver from '../../components/Naver';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-home">
        <div className="add-navers">
          <h1>Navers</h1>
          <Button label="Adicionar Naver" />
        </div>

        <div className="navers-list">

          <Naver />
          <Naver />
          <Naver />
          <Naver />

        </div>
      </main>
    </div>  
  );
}

export default Home;