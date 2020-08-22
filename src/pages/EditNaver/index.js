import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/back-icon.svg';

import './styles.css';

function EditNaver(props) {
  return (
    <div className="add-naver-container">
      <Header />
      {console.log(props)}
      <main className="main-add-naver">
        <div className="add-naver-title">
          <a href="/"><img src={backIcon} alt="voltar"/></a>
          <span>Editar Naver</span>
        </div>

        <form className="add-naver-form">
          <Input className="grid-1 name" placeholder="Nome" label="Nome"/>
          <Input className="grid-2 office" placeholder="Cargo" label="Cargo"/>
          <Input className="grid-1 age" placeholder="idade" label="idade"/>
          <Input className="grid-2 time" placeholder="Tempo de empresa" label="Tempo de empresa"/>
          <Input className="grid-1 projects" placeholder="Projetos que Participou" label="Projetos que Participou"/>
          <Input className="grid-2 photo" placeholder="URL da foto do Naver" label="URL da foto do Naver"/>
          <Button label="Salvar" className="submit" />
        </form>
      </main>
    </div>
  );
}

export default EditNaver;