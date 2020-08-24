import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/back-icon.svg';

import './styles.css';

import { useAuth } from '../../hooks/AuthContext';

import api from '../../services/api';

function AddNaver() {
  const [naver, setNaver] = useState({
    name: '',
    birthdate: '',
    job_role: '',
    admission_date: '',
    project: '',
    url: '',
  });

  const { token } = useAuth();
  const history = useHistory();

  const handleNaverChange = (key, {value}) => {
    setNaver({...naver, [key]: value});
  }
  
  const submitNewNaver = async (e) => {
    e.preventDefault();

    await api.post('/navers', naver, {
      headers: { authorization: `Bearer ${token}`}
    }).then(response => {alert('Usuário criado')}).catch(() => {alert('Erro ao adicionar o/a Naver')});
    history.push('/');
  }

  return (
    <div className="add-naver-container">
      <Header />
      <main className="main-add-naver">

        <div className="add-naver-title">
          <Link to="/"><img src={backIcon} alt="voltar"/></Link>
          <span>Adicionar Naver</span>
        </div>

        <form onSubmit={submitNewNaver} className="add-naver-form">
          <Input 
            className="name" 
            placeholder="Nome" 
            label="Nome" 
            required 
            onChange={(e) => handleNaverChange('name', e.target)} 
          />
          
          <Input 
            className="office" 
            placeholder="Cargo" 
            label="Cargo" 
            required 
            onChange={(e) => handleNaverChange('job_role', e.target)} 
          />
          
          <Input 
            className="age" 
            placeholder="idade" 
            label="idade" 
            required 
            onChange={(e) => handleNaverChange('birthdate', e.target)} 
          />
          
          <Input 
            className="time" 
            placeholder="Tempo de empresa" 
            label="Tempo de empresa" 
            required 
            onChange={(e) => handleNaverChange('admission_date', e.target)} 
          />
          
          <Input 
            className="projects" 
            placeholder="Projetos que Participou" 
            label="Projetos que Participou" 
            required 
            onChange={(e) => handleNaverChange('project', e.target)}
          />
          
          <Input 
            className="photo" 
            placeholder="URL da foto do Naver" 
            label="URL da foto do Naver" 
            required 
            onChange={(e) => handleNaverChange('url', e.target)} 
          />
          
          <Button label="Salvar" type="submit" />
        </form>

      </main>
    </div>
  );
}

export default AddNaver;