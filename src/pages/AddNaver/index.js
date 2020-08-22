import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/back-icon.svg';

import './styles.css';

function AddNaver() {
  return (
    <div className="add-naver-container">
      <Header />
      <main className="main-add-naver">
        <div className="add-naver-title">
          <Link to="/"><img src={backIcon} alt="voltar"/></Link>
          <span>Adicionar Naver</span>
        </div>

        <form className="add-naver-form">
          <Input className="name" placeholder="Nome" label="Nome"/>
          <Input className="office" placeholder="Cargo" label="Cargo"/>
          <Input className="age" placeholder="idade" label="idade"/>
          <Input className="time" placeholder="Tempo de empresa" label="Tempo de empresa"/>
          <Input className="projects" placeholder="Projetos que Participou" label="Projetos que Participou"/>
          <Input className="photo" placeholder="URL da foto do Naver" label="URL da foto do Naver"/>
          <Button label="Salvar" type="submit" className="submit" />
        </form>
      </main>
    </div>
  );
}

export default AddNaver;